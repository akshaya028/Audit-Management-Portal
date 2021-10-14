export class loginDetails 
{
    userName : string ;
    passWord : string ;

    constructor(username?:string,password?:string)
    {
        this.userName = username || " ";
        this.passWord = password || " ";
    }
}