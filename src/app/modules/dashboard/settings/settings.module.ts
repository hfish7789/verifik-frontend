import {
    NgModule
} from '@angular/core';
import {
    RouterModule
} from '@angular/router';
import {
    MatButtonModule
} from '@angular/material/button';
import {
    MatFormFieldModule
} from '@angular/material/form-field';
import {
    MatIconModule
} from '@angular/material/icon';
import {
    MatInputModule
} from '@angular/material/input';
import {
    MatRadioModule
} from '@angular/material/radio';
import {
    MatSelectModule
} from '@angular/material/select';
import {
    MatSlideToggleModule
} from '@angular/material/slide-toggle';
import {
    MatSidenavModule
} from '@angular/material/sidenav';
import {
    FuseAlertModule
} from '@fuse/components/alert';
import {
    SharedModule
} from 'app/shared/shared.module';
import {
    SettingsComponent
} from 'app/modules/dashboard/settings/settings.component';
import {
    SettingsAccountComponent
} from 'app/modules/dashboard/settings/account/account.component';
import {
    SettingsSecurityComponent
} from 'app/modules/dashboard/settings/security/security.component';
import {
    SettingsPlanBillingComponent
} from 'app/modules/dashboard/settings/plan-billing/plan-billing.component';
import {
    SettingsNotificationsComponent
} from 'app/modules/dashboard/settings/notifications/notifications.component';
import {
    SettingsTeamComponent
} from 'app/modules/dashboard/settings/team/team.component';
import {
    settingsRoutes
} from 'app/modules/dashboard/settings/settings.routing';
import {
    MatSnackBarModule
} from '@angular/material/snack-bar';

@NgModule({
    declarations: [
        SettingsComponent,
        SettingsAccountComponent,
        SettingsSecurityComponent,
        SettingsPlanBillingComponent,
        SettingsNotificationsComponent,
        SettingsTeamComponent
    ],
    imports: [
        RouterModule.forChild(settingsRoutes),
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatRadioModule,
        MatSelectModule,
        MatSidenavModule,
        MatSlideToggleModule,
        FuseAlertModule,
        MatSnackBarModule,
        SharedModule
    ]
})
export class SettingsModule {}