import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { auditRequest } from './auditRequest';
@Injectable({
  providedIn: 'root'
})
export class SeverityserviceService {
  url:string="https://localhost:44379/api/AuditSeverity";
  constructor(private httpClient: HttpClient) { }
  getAuditResponse() : Observable<any>
  {
    return this.httpClient.get<any>("https://localhost:44379/api/AuditSeverity/ProjectAuditresult");
  }
}
