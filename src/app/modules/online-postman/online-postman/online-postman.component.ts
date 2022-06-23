import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    ViewChild,
    ElementRef,
    Component,
    OnDestroy,
    OnInit,
    ViewEncapsulation
} from '@angular/core';
import {
    ActivatedRoute,
    Router
} from '@angular/router';
import {
    OnlinePostmanService
} from '../online-postman.service';
import {
    forkJoin,
    Observable,
    of
} from 'rxjs';
import moment from 'moment';
import { catchError } from 'rxjs/operators';


@Component({
    selector: 'app-online-postman',
    templateUrl: './online-postman.component.html',
    styleUrls: ['./online-postman.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnlinePostmanComponent implements OnInit {
    @ViewChild('falseClick') click: ElementRef < HTMLElement > ;
    public loaded: Observable < boolean > ;
    methodsToShow: any;
    documento: any;
    documentType: any = 'CC';
    plate: any;
    date: any;
    loading: any;
    needsDate: any = false;
    buttonSwitch: any = true;
    jsonResponse: any;
    response: any = false;

    endpoints: any = {
        // RUNT
        consultarConductor: {
            title: 'Consultar Conductor',
            descripcion: 'Método encargado de consultar la información de un conductor como licencias, tipo y estado de las mismas y si tiene comparendos. Si el conductor no tiene comparendos, el sistema le dirá el número de paz y salvo ante el SIMIT.',
            url: '/v2/co/runt/consultarConductor',
            documentosPermitido: 'CC, TI, CE, PA, RC',
            categoria: 'runt'
        },
        consultarVehiculo: {
            title: 'Consulta de Vehiculo',
            descripcion: 'Con este método, podrás consultar la información de un vehículo enviando los datos del propietario y la placa del mismo. El sistema te retornará si el vehículo tiene SOAT Y Técnico Mecánico Vigente y las características principales del vehículo.',
            url: '/v2/co/runt/consultarVehiculo',
            documentosPermitido: 'CC, TI, CE, PA, RC',
            documentosExtras: 'Placa',
            categoria: 'runt'
        },
        consultarCompletoVehiculo: {
            title: 'Consulta de Vehiculo Completo',
            descripcion: 'Con este método podrás consultar de forma detallada diversa información del vehículo, el único parámetro que necesitas es la placa del vehículo a consultar.',
            url: '/v2/co/runt/consultarVehiculoCompleto',
            documentosPermitido: 'Placa',
            categoria: 'runt'
        },
        // RAMAJUDICIAL
        consultarProcesosJudiciales: {
            title: 'Consulta de Procesos Judiciales',
            descripcion: 'Método encargado de consultar los procesos judiciales de una persona Colombiana. Si el ciudadano tiene mas de 20 procesos sin importar el estado, la respuesta del servicio devolverá la totalidad de las páginas que tiene el ciudadano. Tener en cuenta que estos parámetros de respuesta serán usados para realizar la petición al servicio de consulta de procesos judiciales paginada.',
            url: '/v2/co/procesos',
            documentosPermitido: 'CC',
            categoria: 'judicial'
        },
        // SIMMIT
        consultarSuspenciones: {
            title: 'Consulta de Suspenciones - SIMIT',
            descripcion: 'En esta sección, podrás consultar toda la información de comparendos, así como si tiene suspenciones y que tipo de suspensiones son.',
            url: '/v2/co/simit/consultarSuspenciones',
            documentosPermitido: 'CC, PA, CE, TI, RC',
            categoria: 'simit'
        },
        consultarAcuerdos: {
            title: 'Consulta de Acuerdos - SIMIT',
            descripcion: 'Aquí podrás consultar todos los acuerdos de pago que tenga vigente un conductor.',
            url: '/v2/co/simit/consultarAcuerdos',
            documentosPermitido: 'CC, PA, RC, CE, TI',
            categoria: 'simit'
        },
        consultarResoluciones: {
            title: 'Consulta de Resoluciones - SIMIT',
            descripcion: 'Consulta que comparendos evolucionaron a Resolución.',
            url: '/v2/co/simit/consultarResoluciones',
            documentosPermitido: 'CC, TI, PA, RC, CE',
            categoria: 'simit'
        },
        consultarComparendos: {
            title: 'Consulta de Comparendos - SIMIT',
            descripcion: 'Aquí, podrás consultar los comparendos que tiene un conductor frente al SIMIT. Consultar, la fecha del comparendo, el valor y la ciudad donde fue realizado.',
            url: '/v2/co/simit/consultarComparendos',
            documentosPermitido: 'CC, TI, CE, PA, RC',
            categoria: 'simit'
        },
        // RUES
        consultarRues: {
            title: 'Consulta de Empresa por NIT - RUES',
            descripcion: 'Método que permite consultar una empresa a través de su NIT.',
            url: '/v2/co/rues/consultarEmpresaPorNit',
            documentosPermitido: 'NIT',
            categoria: 'empresarial'
        },
        // REGISTRADURIA
        consultarNombreCiudadano: {
            title: 'Consulta de Nombres de Ciudadano/Extranjeros',
            descripcion: 'Método encargado de consultar los nombres y apellidos de un ciudadano Colombiano.',
            url: '/v2/co/consultarNombres',
            documentosPermitido: 'CC, CE, PEP',
            categoria: 'ciudadano'
        },
        // PROCURADORIA
        consultarAntecedentes: {
            title: 'Consulta de Antecedentes Penales',
            descripcion: 'A través de este método podrás consultar los antecedentes de un ciudadano Colombiano, así como sus inhabilidades.',
            url: '/v2/co/procuraduria/antecedentes',
            documentosPermitido: 'CC',
            categoria: 'judicial'

        },
        // INTERPOL
        consultarInterpol: {
            title: 'Consulta de Interpol',
            descripcion: 'A través de este método podrás consultar los antecedentes de un ciudadano Colombiano, así como sus inhabilidades.',
            url: '/v2/co/interpol',
            documentosPermitido: 'CC',
            categoria: 'judicial'
        },
        // OFAC
        consultarOFAC: {
            title: 'Consulta de OFAC',
            descripcion: 'A través de este método, podrás consultar si una persona o empresa se encuentra vinculada a la lista OFAC (Lista Clinton) por lavado de activos.',
            url: '/v2/co/ofac',
            documentosPermitido: 'CC, NIT',
            categoria: 'judicial'
        },
        // SISPRO
        consultarAfiliaciones: {
            title: 'Consulta de Afiliaciones - SISPRO',
            descripcion: 'A través de este Método,  consultar las afiliaciones de un ciudadano Colombiano a los servicios de la EPS, así como información de la afiliación y los meses que se han cotizado.',
            url: '/v2/co/afiliaciones',
            documentosPermitido: 'CC',
            categoria: 'ciudadano'
        },
    }

    methods: any = [
        'consultarNombreCiudadano',
        'consultarAntecedentes',
        'consultarConductor',
        'consultarVehiculo',
        'consultarCompletoVehiculo',
        'consultarProcesosJudiciales',
        'consultarSuspenciones',
        'consultarAcuerdos',
        'consultarResoluciones',
        'consultarComparendos',
        'consultarRues',
        'consultarInterpol',
        'consultarOFAC',
        'consultarAfiliaciones',
    ]

    methodsCiudadano: any = [
        'consultarNombreCiudadano',
        'consultarAfiliaciones',
    ]

    methodsJudicial: any = [
        'consultarProcesosJudiciales',
        'consultarAntecedentes',
        'consultarInterpol',
        'consultarOFAC',
    ]

    methodsSimit: any = [
        'consultarSuspenciones',
        'consultarAcuerdos',
        'consultarResoluciones',
        'consultarComparendos',
    ]

    methodsRunt: any = [
        'consultarConductor',
        'consultarVehiculo',
        'consultarCompletoVehiculo',
    ]
    methodsEmpresarial: any = [
        'consultarRues',
    ]

    categoryCatalog: any = [{
            name: 'Ciudadano',
            value: 'ciudadano'
        },
        {
            name: 'Judicial',
            value: 'judicial'
        },
        {
            name: 'SIMIT',
            value: 'simit'
        },
        {
            name: 'RUNT',
            value: 'runt'
        },
        {
            name: 'Empresarial',
            value: 'empresarial'
        },
    ]

    canUseCC: any = [
        'consultarNombreCiudadano',
        'consultarAfiliaciones',
        'consultarSuspenciones',
        'consultarAcuerdos',
        'consultarResoluciones',
        'consultarComparendos',
        'consultarProcesosJudiciales',
        'consultarAntecedentes',
        'consultarInterpol',
        'consultarOFAC',
        'consultarConductor',
        'consultarVehiculo',
        'consultarCompletoVehiculo',
    ];
    canUseCE: any = [
        'consultarNombreCiudadano',
        'consultarConductor',
        'consultarVehiculo',
        'consultarSuspenciones',
        'consultarAcuerdos',
        'consultarResoluciones',
        'consultarComparendos',
        'consultarCompletoVehiculo',
    ]
    canUseTI: any = [
        'consultarConductor',
        'consultarVehiculo',
        'consultarSuspenciones',
        'consultarAcuerdos',
        'consultarResoluciones',
        'consultarComparendos',
        'consultarCompletoVehiculo',
    ]
    canUsePA: any = [
        'consultarConductor',
        'consultarVehiculo',
        'consultarSuspenciones',
        'consultarAcuerdos',
        'consultarResoluciones',
        'consultarComparendos',
        'consultarCompletoVehiculo',
    ]
    canUseRC: any = [
        'consultarConductor',
        'consultarVehiculo',
        'consultarSuspenciones',
        'consultarAcuerdos',
        'consultarResoluciones',
        'consultarComparendos',
        'consultarCompletoVehiculo',
    ]
    canUseNIT: any = [
        'consultarRues',
        'consultarOFAC',
    ]

    canUsePEP: any = [
        'consultarNombreCiudadano',
        'consultarCompletoVehiculo',
    ]

    selectedMethods: any = [];
    selectedWithPlate: any;

    constructor(
        private _activatedRoute: ActivatedRoute,
        private _postman: OnlinePostmanService,
        private _router: Router
    ) {
        this.methodsToShow = this.methods;
        this.selectedWithPlate = false;
    }

    ngOnInit(): void {}

    filterByCategory(data): void {
        switch (data.value) {
            case 'all':
                this.methodsToShow = this.methods;
                break;
            case 'ciudadano':
                this.methodsToShow = this.methodsCiudadano;
                break;
            case 'judicial':
                this.methodsToShow = this.methodsJudicial;
                break;
            case 'simit':
                this.methodsToShow = this.methodsSimit;
                break;
            case 'runt':
                this.methodsToShow = this.methodsRunt;
                break;
            case 'empresarial':
                this.methodsToShow = this.methodsEmpresarial;
                break;

            default:
                break;
        }
    }
    canUseDocument(data): string[] {
        switch (data) {
            case 'CC':
                return this.canUseCC;
            case 'CE':
                return this.canUseCE;
            case 'TI':
                return this.canUseTI;
            case 'PA':
                return this.canUsePA;
            case 'RC':
                return this.canUseRC;
            case 'PEP':
                return this.canUsePEP;
            case 'NIT':
                return this.canUseNIT;
        }
    }

    selectedMethod(data): void {
        const index = this.selectedMethods.indexOf(data);

        const canUse = this.canUseDocument(this.documentType);

        if (canUse.indexOf(data) == -1) {
            alert(`el metodo ${data}, no puede ser consultado con el tipo de documento ${this.documentType}`);

            return;
        }

        index > -1 ? this.selectedMethods.splice(index, 1) : this.selectedMethods.push(data);

        this.needsDate = this.needDate();

        this.selectedWithPlate = Boolean(this.needsPlate());
    }

    isPlateFieldVisible(): boolean {
        return this.selectedWithPlate;
    }

    needDate(): boolean {
        return this.selectedMethods.includes('consultarAfiliaciones');
    }

    needsPlate(method = ''): number {
        const _selectedMethods = [...this.selectedMethods, method];

        return Number(_selectedMethods.includes('consultarCompletoVehiculo')) + Number(_selectedMethods.includes('consultarVehiculo'));
    }

    sendRequest(): void {
        if (this.loading) {
            return;
        }

        this.loading = true;

        const map = this._orderPromises();

        let promises = [];

        let methods = [];

        map.forEach(promise => {
            promises.push(promise['promise']);

            methods.push(promise['method'])
        });

        forkJoin(promises).subscribe(results => {
                for (let index = 0; index < results.length; index++) {
                    const element = results[index];

                    element['metodo'] = methods[index];
                }

                this.jsonResponse = results;
            }, error => {
                this.loading = false;
            },
            () => {
                this.loading = false;

                this.response = true;

                this.falseClick();
            });
    }

    _orderPromises(): Array < Observable < any >> {
        if (!this.selectedMethods.length) {
            return [new Observable()];
        }

        const promises = [];
        // tslint:disable-next-line:prefer-for-of
        for (let index = 0; index < this.selectedMethods.length; index++) {
            const method = this.selectedMethods[index];

            let payload = {
                'documentNumber': this.documento,
                'documentType': this.documentType,
            };

            if (method === 'consultarCompletoVehiculo') {
                payload['plate'] = this.plate;

                delete payload.documentNumber;

                delete payload.documentType;
            }

            if (method === 'consultarVehiculo') {
                payload['plate'] = this.plate;
            }

            if (method === 'consultarAfiliaciones') {
                payload['date'] = moment(this.date).format('DD/MM/YYYY');
            }

            promises.push({
                method: method,
                promise: this._postman.genericRequest(payload, this.endpoints[method].url).pipe(
                  catchError(err => of({error: 'HAY UN ERROR EN EL ESTA BUSQUEDA, SI EL ERROR PERSISTE CAMBIE LOS DATOS DE BUSQUEDA'})),
                )
            });
        }

        return promises;
    }

    falseClick(): void {
        setTimeout(() => {
            let el: HTMLElement = this.click.nativeElement;
            el.click();
        }, 1000);
    }

    canPost(origin = ''): void {
        if (this.selectedWithPlate && !this.plate) {
            this.buttonSwitch = false;
        }

        if (this.documentType && this.documento) {
            this.buttonSwitch = false;
        }

        if (origin == 'documentTypeChange') {
            this.selectedMethods = []
        }
    }

}