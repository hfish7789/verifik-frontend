import {
  NgModule
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';
import {
  DashboardComponent
} from './dashboard/dashboard.component';
import {
  RouterModule
} from '@angular/router';
import {
  MatButtonModule
} from '@angular/material/button';
import {
  MatDividerModule
} from '@angular/material/divider';
import {
  MatIconModule
} from '@angular/material/icon';
import {
  MatMenuModule
} from '@angular/material/menu';
import {
  SharedModule
} from 'app/shared/shared.module';
import {
  MatProgressBarModule
} from '@angular/material/progress-bar';
import {
  MatSortModule
} from '@angular/material/sort';
import {
  MatTableModule
} from '@angular/material/table';
import {
  NgApexchartsModule
} from 'ng-apexcharts';
import {
  DashboardRoutes
} from './dashboard/dashboard.routing';
import {
  FuseAlertModule
} from '@fuse/components/alert';
import {
  MatSnackBarModule
} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(DashboardRoutes),
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatMenuModule,
    MatProgressBarModule,
    MatSortModule,
    MatTableModule,
    NgApexchartsModule,
    SharedModule,
    FuseAlertModule,
    MatSnackBarModule,
  ]
})
export class DashboardModule {}