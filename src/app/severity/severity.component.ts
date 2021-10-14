import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { auditDetails } from '../Models/auditDetails';
import { auditRequest } from '../Models/auditRequest';
import { auditResponse } from '../Models/auditResponse';

@Component({
  selector: 'app-severity',
  templateUrl: './severity.component.html',
  styleUrls: ['./severity.component.css']
})
export class SeverityComponent implements OnInit {

  @Input() details !: auditDetails;

  status : string='';
  requestdata: auditRequest = {
    //ProjectId: 0,
    ProjectManagerName: '',
    ApplicationOwnerName: '',
    ProjectName: '',
    auditDetail: new auditDetails()//this.details
  };
  response : auditResponse = new auditResponse();

  responseCheckFlag : boolean = false;
  statustype:string="table-success";
  
  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
  }
  saveProjectdetails(projdetails: auditRequest): void
  {
    //console.log(projdetails);
    projdetails.auditDetail=this.details;
    projdetails.ProjectManagerName=localStorage.getItem("username");
    //projdetails.auditDetail.ListOfQuestions=this.details.ListOfQuestions;
    //["yes","yes","yes","yes","no"];
    this.httpClient.post<auditResponse>("https://localhost:44379/api/ProjectExecutionStatus", projdetails,{
      headers:new HttpHeaders().set("Authorization","Bearer "+localStorage.getItem("jwt"))
    }).subscribe(data => {
      //console.warn(data);
      this.responseCheckFlag = true;
      this.response = data;
      //console.log(this.response.projectExecutionStatus.length);
      if(this.response.projectExecutionStatus=="RED")
      {
        this.statustype="table-danger";
      }
    });
    //this.responseCheckFlag = true;
    //this.httpClient.get<auditResponse>("https://localhost:44379/api/AuditSeverity/ProjectAuditresult").subscribe(data => {
      //this.response = data;
      //return this.response;
    //})
  }
}
