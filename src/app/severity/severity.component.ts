import { Component, OnInit } from '@angular/core';
import { SeverityserviceService } from '../severityservice.service';
import { auditResponse } from '../auditResponse';
import { auditRequest } from '../auditRequest';
import { auditDetails } from '../auditDetails';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-severity',
  templateUrl: './severity.component.html',
  styleUrls: ['./severity.component.css']
})
export class SeverityComponent implements OnInit {
  response:auditResponse=new auditResponse();
  status:string='';
  requestdata:auditRequest={
    ProjectId:0,
    ProjectManagerName:'',
    ApplicationOwnerName:'',
    ProjectName:'',
    auditDetail:new auditDetails()
  };
     
  constructor(private severityService:SeverityserviceService,private httpClient:HttpClient) {
   }
  
  ngOnInit(): void {
  }
  saveProjectdetails(projdetails:auditRequest):void
  {
    
    projdetails.auditDetail.AuditType="Internal";
    projdetails.auditDetail.ListOfQuestions[0]="yes";
    projdetails.auditDetail.ListOfQuestions[1]="yes";
    projdetails.auditDetail.ListOfQuestions[2]="yes";
    projdetails.auditDetail.ListOfQuestions[3]="yes";
    projdetails.auditDetail.ListOfQuestions[4]="no";
    console.log(projdetails);
    //["yes","yes","yes","yes","no"];
    this.httpClient.post("https://localhost:44379/api/AuditSeverity/Auditrequest",projdetails).subscribe(data=>
    {
      console.warn(data); 
    });
    this.httpClient.get<auditResponse>("https://localhost:44379/api/AuditSeverity/ProjectAuditresult").subscribe(data=>{
      console.log(this.response);
      this.response=data;
          //this.status=this.response.projectExecutionStatus;
        return this.response;
    })
    //this.severityService.getAuditResponse().subscribe((res)=>
      //{
          //this.response=res;
          //console.log(this.response);
          //this.status=this.response.projectExecutionStatus;
          //return this.response;
      //});
  }

}
