import { Route } from '@angular/router';
import { SettingsComponent } from 'app/modules/dashboard/settings/settings.component';

export const settingsRoutes: Route[] = [
    {
        path     : '',
        component: SettingsComponent
    }
];
