import { Component } from '@angular/core';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']  
})
export class ListComponent {
  ulist:any=[];
                                              
  constructor(public cs:CrudService){}

  ngOnInit()
  {
    this.fetchAllUsers();
  }
  fetchAllUsers()
  {
   this.cs. getAllUser().subscribe(res=>{this.ulist=res;});
  }
  delstudent(sid:number)
  {
    if(confirm("Are you sure delete this employee?"))
    {
      this.cs.removeuser(sid).subscribe();
      this.fetchAllUsers()
    }
  }
}

