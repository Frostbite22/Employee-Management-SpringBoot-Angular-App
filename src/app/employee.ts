export interface Employee 
{
    id?: number ; 
    name : string ; 
    email : string ; 
    jobTitle?: string ; 
    phone? : string ; 
    imageUrl? : string ; 
    employeeCode? : string ; 
}

export class Employee 
{
    id?: number ; 
    name : string ; 
    email : string ; 
    jobTitle?: string ; 
    phone? : string ; 
    imageUrl? : string ; 
    employeeCode? : string ; 

    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
      }
    
}