import {
  NgModule
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';
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
  MatSelectModule
} from '@angular/material/select';
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
  FuseAlertModule
} from '@fuse/components/alert';
import {
  MatSnackBarModule
} from '@angular/material/snack-bar';
import {
  MatCheckboxModule
} from '@angular/material/checkbox';
import {
  MatFormFieldModule
} from '@angular/material/form-field';
import {
  MatInputModule
} from '@angular/material/input';
import {
  OnlinePostmanComponent
} from './online-postman/online-postman.component';
import {
  OnlinePostmanRouting
} from './online-postman/online-postman.routing';
import {
  MatSlideToggleModule
} from '@angular/material/slide-toggle';



@NgModule({
  declarations: [
    OnlinePostmanComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(OnlinePostmanRouting),
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatMenuModule,
    MatProgressBarModule,
    MatSortModule,
    MatTableModule,
    NgApexchartsModule,
    SharedModule,
    FuseAlertModule,
    MatSnackBarModule,
    MatSlideToggleModule
  ]
})
export class OnlinePostmanModule {}