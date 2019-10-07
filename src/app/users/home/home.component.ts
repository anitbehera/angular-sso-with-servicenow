import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetticketsService } from 'src/app/services/gettickets.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private ticketservice: GetticketsService) { }
  ngOnInit() {
    let token = localStorage.getItem('access_token');
    if(!token){
      this.router.navigate(['/']);
    }
    this.showIncidents();
  }
  showIncidents() {
    this.ticketservice.getIncidents()
      .subscribe((data) =>  {
          console.log('data', data);

      });
  }
  onSignout(){
    localStorage.removeItem('access_token');
    this.router.navigate(['/']);
  }
}
