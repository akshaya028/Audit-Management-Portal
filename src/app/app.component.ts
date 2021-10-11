import { Component } from '@angular/core';
import { auditResponse } from './auditResponse';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AuditSeverity';


  constructor()
  {
      
  }
}
