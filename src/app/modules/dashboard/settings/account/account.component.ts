import {
    ChangeDetectionStrategy,
    Component,
    OnInit,
    ViewEncapsulation
} from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    Validators
} from '@angular/forms';
import {
    UserService
} from 'app/core/user/user.service';
import {
    MatSnackBar
} from '@angular/material/snack-bar';

@Component({
    selector: 'settings-account',
    templateUrl: './account.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsAccountComponent implements OnInit {
    user: any;
    countryCodes: any = [{
            code: '+54',
            name: 'Argentina'
        },
        {
            code: '+55',
            name: 'Brazil'
        },
        {
            code: '+1',
            name: 'Canada'
        },
        {
            code: '+56',
            name: 'Chile'
        },
        {
            code: '+57',
            name: 'Colombia'
        },
        {
            code: '+506',
            name: 'Costa Rica'
        },
        {
            code: '+593',
            name: 'Ecuador'
        },
        {
            code: '+503',
            name: 'El Salvador'
        },
        {
            code: '+502',
            name: 'Guatemala'
        },
        {
            code: '+504',
            name: 'Honduras'
        },
        {
            code: '+52',
            name: 'Mexico'
        },
        {
            code: '+505',
            name: 'Nicaragua'
        },
        {
            code: '+507',
            name: 'Panama'
        },
        {
            code: '+595',
            name: 'Paraguay'
        },
        {
            code: '+51',
            name: 'Peru'
        },
        {
            code: '+1',
            name: 'United States'
        },
        {
            code: '+598',
            name: 'Uruguay'
        },
        {
            code: '+58',
            name: 'Venezuela'
        },
        {
            code: '+353',
            name: 'Ireland'
        },
    ];
    accountForm: FormGroup;

    /**
     * Constructor
     */
    constructor(
        private _formBuilder: FormBuilder,
        private _userService: UserService,
        private _snackBar: MatSnackBar,
    ) {
        this.user = JSON.parse(localStorage.getItem('user'));
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        // Create the form
        this.accountForm = this._formBuilder.group({
            _id: [this.user._id, [Validators.required]],
            name: [this.user.name, [Validators.required]],
            documentType: [this.user.documentType, [Validators.required]],
            documentNumber: [this.user.documentNumber, [Validators.required]],
            company: [this.user.company],
            address: [this.user.address],
            email: [this.user.email, [Validators.email, Validators.required]],
            countryCode: [this.user.countryCode, [Validators.required]],
            phone: [this.user.phone, [Validators.required]],
        });
    }

    sendData(): void {
        const {
            name,
            company,
            documentType,
            documentNumber,
            email,
            phone,
            countryCode,
            address,
            _id,
        } = this.accountForm.value;

        const payload = {
            name,
            company,
            address,
            email,
            phone,
            countryCode,
            documentNumber,
            documentType,
        };

        this._userService.updateClient(_id, payload).subscribe(
            result => {
              
                this._snackBar.open('Información actualizada con éxito', 'OK', {
                    duration: 3000,
                });
            }, err => {
                this._snackBar.open('Error al actualizar, intenta de nuevo', 'OK', {
                    duration: 3000,
                });
            }
        );
    }
}