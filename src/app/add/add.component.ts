import { Component, Input } from '@angular/core'; 
import { CrudService } from '../crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {


  @Input () add={name:'', dept:'',age:'', poy:'',email:'',phone:''}

  constructor(public cs:CrudService,public rt:Router){}

  addstudent()
  {
    this.cs.adduser(this.add).subscribe();
    this.rt.navigate(['list']);
  }
  
  }
  class addstudent{
    name!:string;
    dept!:string;
    poy!:string;
    email!:string;
    phone!:number;
    age!:number;
  }

