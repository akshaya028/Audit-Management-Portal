import { HttpClient, HttpHeaders } from '@angular/common/http';
import { auditDetails } from './../Models/auditDetails';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css']
})
export class ChecklistComponent implements OnInit {

  auditType: string;
  auditDate: Date;
  questions: string[];
  responses: Array<string>;
  responseObject: auditDetails;
  responseDisableStatus = false;
  auditTypeStatus = false;

  auditDetailsFlag = true;
  auditSeverityPortalFlag = false;
  //var headers_object = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("jwt"));
  constructor(private httpClient:HttpClient) 
  {
    this.auditType = '';
    this.questions = [];
    this.auditDate = new Date();
    this.responses = new Array<string>(5);
    this.responseObject = new auditDetails();
  }

  ngOnInit(): void {
  }
  getQuestions() {
    this.httpClient.get<any>("https://localhost:44321/api/AuditChecklistQuestions?auditType=" + this.auditType,
    {headers: new HttpHeaders({
    }).set("Authorization", "Bearer " + localStorage.getItem("jwt"))}).subscribe(data => {
      this.questions = data;
    });
    this.auditTypeStatus = true;
  }

  onSelectRadio(index: number, event: Event) {
    this.responses[index] = (event.target as HTMLInputElement).value;
    //console.log(this.responses);
  }

  sendResponse() {
    //console.log(this.responses);
    this.responseObject.auditType = this.auditType;
    this.responseObject.auditDate = this.auditDate;
    this.responseObject.ListOfQuestions = this.responses;
    //console.log(this.responseObject);
    this.auditSeverityPortalFlag=true;
    this.auditDetailsFlag=false;
    this.responseDisableStatus=true;
    //this.httpClient.post<auditResponse>("https://localhost:4200/api/checklistResponse", this.responseObject);
  }
}
