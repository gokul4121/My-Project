import { Component } from '@angular/core';
import { CrudService } from '../crud.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  [x: string]: any;
  
  ulist:any=[];

  sid:number=this.act.snapshot.params['id'];

  constructor(public cs:CrudService,public act:ActivatedRoute,public rt:Router){}

  ngOnInit()
  {
    this.fetchsingliuser(this.sid);
  }

  fetchsingliuser(uid:number)
  {
    this.cs.getSingleUser(uid).subscribe(res =>{this.ulist=res;});
  }
  Update(sid:number,info:any)
  {
    this.cs.updateUser(sid,info).subscribe();
    this.rt.navigate(['list']);
  }
}
