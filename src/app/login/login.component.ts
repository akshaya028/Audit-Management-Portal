import { loginDetails } from './../Models/loginDetails';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core'; 
import {Router} from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';
  loginDetailsObject!:loginDetails;

  constructor(private httpClient : HttpClient,private router:Router)
  { 
    
  }

  ngOnInit(): void {
  }

  formSubmitEvent()
  {
    this.loginDetailsObject = new loginDetails(this.username,this.password);
    //console.log(this.username+" "+this.password);
    localStorage.setItem("username",this.username);
    this.httpClient.post("https://localhost:44347/api/Authorization", this.loginDetailsObject, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Method': '*'
      })
    }).subscribe(response => {
      const token = (<any>response).token;
      //console.log(token);
      localStorage.setItem("jwt", token);
      this.router.navigate(["/checklist"]);
    },err =>
    {
      //console.log(err);
      this.router.navigate(["/error"]);
    });
    
  }
}
