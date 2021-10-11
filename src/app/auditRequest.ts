import { auditDetails } from "./auditDetails";
export class auditRequest 
{
    ProjectId:number=0
    ProjectName:string=''; 
    ProjectManagerName:string ='';
    ApplicationOwnerName:string ='';
    auditDetail:auditDetails=new auditDetails();
   
}