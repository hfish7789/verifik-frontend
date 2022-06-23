import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user: any;
  
  accessToken: string;

  constructor() {
    this.user = JSON.parse(localStorage.getItem('user'));

    this.accessToken = localStorage.getItem('accessToken');
    console.log(this.user);
  }

  ngOnInit(): void {
    
  }

}