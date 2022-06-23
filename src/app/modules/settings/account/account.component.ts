import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
    UserService
} from 'app/core/user/user.service';

@Component({
    selector       : 'settings-account',
    templateUrl    : './account.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsAccountComponent implements OnInit
{
    user: any;
    countryCodes:any = [{
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
    )
    {
        this.user = JSON.parse(localStorage.getItem('user'));
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Create the form
        this.accountForm = this._formBuilder.group({
            name    : [this.user.name],
            // username: ['brianh'],
            // title   : ['Senior Frontend Developer'],
            company : [this.user.company],
            address : [this.user.address],
            email   : [this.user.email, Validators.email],
            phone   : [this.user.phone],
            countryCode : [this.user.countryCode],
        });
    }

    sendData(): void{
        const payload = {
            name: this.accountForm.get('name').value,
            company: this.accountForm.get('company').value,
            address: this.accountForm.get('address').value,
            email: this.accountForm.get('email').value,
            phone: this.accountForm.get('phone').value,
            countryCode: this.accountForm.get('countryCode').value,
        }
        this._userService.updateClient(payload).subscribe(
            result => {
                console.log( result ); 
            },err => {
                console.log( err );
            }
        )
    }
}
