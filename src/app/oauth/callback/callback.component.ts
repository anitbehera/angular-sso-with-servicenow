import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    let token = localStorage.getItem('access_token');
    if(!token){
      let match = RegExp('[#&]' + 'access_token' + '=([^&]*)').exec(window.location.hash);
      let access_token = match && decodeURIComponent(match[1].replace(/\+/g, ' '));
      //console.log('token',token);
      localStorage.setItem('access_token', access_token);
      this.router.navigate(['/home']);
    } else {
      this.router.navigate(['/home']);
    }
  }

}
