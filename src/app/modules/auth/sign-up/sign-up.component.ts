import {
    Component,
    OnInit,
    ViewChild,
    ViewEncapsulation
} from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    NgForm,
    Validators
} from '@angular/forms';
import {
    Router
} from '@angular/router';
import {
    fuseAnimations
} from '@fuse/animations';
import {
    FuseAlertType
} from '@fuse/components/alert';
import {
    AuthService
} from 'app/core/auth/auth.service';

@Component({
    selector: 'auth-sign-up',
    templateUrl: './sign-up.component.html',
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class AuthSignUpComponent implements OnInit {
    @ViewChild('signUpNgForm') signUpNgForm: NgForm;

    alert: {
        type: FuseAlertType;message: string
    } = {
        type: 'success',
        message: ''
    };
    signUpForm: FormGroup;
    showAlert: boolean = false;
    countryCodes = [{
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

    /**
     * Constructor
     */
    constructor(
        private _authService: AuthService,
        private _formBuilder: FormBuilder,
        private _router: Router
    ) {}

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        // Create the form
        const testData = {
            name: `Usuario ${(Math.floor(10000000 + Math.random() * 90000000))}`,
            email: `${(Math.floor(10000000 + Math.random() * 90000000))}@gmail.com`,
            password: `${(Math.floor(10000000 + Math.random() * 90000000))}`,
            phone: `${(Math.floor(10000000 + Math.random() * 90000000))}`,
            agreements: false,
        };

        this.signUpForm = this._formBuilder.group({
            name: ['', Validators.required],
            email: [``, [Validators.required, Validators.email]],
            password: [``, Validators.required],
            phone: [``],
            countryCode: ['+57'],
            agreements: [testData.agreements, Validators.requiredTrue]
        });
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Sign up
     */
    signUp(): void {
        // Do nothing if the form is invalid
        if (this.signUpForm.invalid) {
            return;
        }

        // Disable the form
        this.signUpForm.disable();

        // Hide the alert
        this.showAlert = false;

        // Sign up
        this._authService.signUp(this.signUpForm.value)
            .subscribe(
                (response) => {
                    if (!response) {
                        // Navigate to the confirmation required page
                        this._router.navigateByUrl('/confirmation-required');
                    }

                    this._router.navigateByUrl('/dashboard');
                },
                (response) => {
                    // Re-enable the form
                    this.signUpForm.enable();

                    // Reset the form
                    this.signUpNgForm.resetForm();

                    // Set the alert
                    this.alert = {
                        type: 'error',
                        message: 'Something went wrong, please try again.'
                    };

                    // Show the alert
                    this.showAlert = true;
                }
            );
    }
}