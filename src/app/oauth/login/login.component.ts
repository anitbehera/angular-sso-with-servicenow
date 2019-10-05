import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  oauth2Endpoint = "https://dev70643.service-now.com/oauth_auth.do";
  response_type = "token";
  client_id = "06296f0d9e404010b3bab5ab0696e1a7";
  redirect_uri = "http://localhost:4200";
  state = "login";
  constructor() { }

  ngOnInit() {
  }

  onSignin(snowform){
    snowform.submit();
  }


}
