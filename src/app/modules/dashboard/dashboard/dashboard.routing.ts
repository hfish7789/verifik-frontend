//
import {
    Route
} from '@angular/router';

// import { FinanceResolver } from 'app/modules/admin/dashboards/finance/finance.resolvers';
import {
    DashboardComponent
} from './dashboard.component';
// import {
//     DashboardResolver
// } from './dashboard.resolvers';

export const DashboardRoutes: Route[] = [{
    path: '',
    component: DashboardComponent,
    // resolve  : {
    //     data: DashboardResolver
    // }
}];