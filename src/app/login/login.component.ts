import { loginDetails } from './../Models/loginDetails';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core'; 
import {Router} from '@angular/router'; 
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';
  loginDetailsObject!:loginDetails;
  loginflag=0;
  

  constructor(private httpClient : HttpClient,private router:Router)
  { 
    
  }

  ngOnInit(): void {
    
    if(localStorage.getItem("session")===undefined)
    {
      localStorage.setItem("session","false");
    }
    /*
    else if(localStorage.getItem("session")=="true")
    {
      localStorage.removeItem("session");
      this.router.navigateByUrl("/login");
    }*/
  }
  validate():boolean
  {
    if(this.username.length==0 && this.password.length==0)
    {
      return true;
    }
    return false;
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
      localStorage.setItem("session","true");
      this.router.navigate(["/home"]);
    },err =>
    {
      //console.log(err);
      //alert("Invalid username/password");
      this.loginflag=1;
      this.username="";
      this.password="";
      this.router.navigate(["/login"]);
    });
    
  }
}
