import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FuseValidators } from '@fuse/validators';
import {
    UserService
} from 'app/core/user/user.service';


@Component({
    selector       : 'settings-security',
    templateUrl    : './security.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsSecurityComponent implements OnInit
{
    securityForm: FormGroup;

    /**
     * Constructor
     */
    constructor(
        private _formBuilder: FormBuilder,
        private _userService: UserService,
    )
    {
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
        this.securityForm = this._formBuilder.group({
            currentPassword  : ['', Validators.required],
            newPassword      : ['', Validators.required],
            confirmNewPassword      : ['', Validators.required],
            // twoStep          : [true],
            // askPasswordChange: [false]
        },
        {
            validators: FuseValidators.mustMatch('newPassword', 'confirmNewPassword')
        });
    }

    sendData():void{
        const payload = {
            currentPassword: this.securityForm.get('currentPassword').value,
            newPassword: this.securityForm.get('newPassword').value,
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
