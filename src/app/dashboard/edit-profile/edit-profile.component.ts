import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from 'src/app/todo-service.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
a:any

  constructor(private http:TodoServiceService) { }

  ngOnInit(): void {

    this.a=this.http.getUserInfoFromLocalstorage()
console.log(this.a)

  }



  editProfile()
  {
let b={
  _id:this.a._id,
  firstname:this.a.firstname,
  lastname:this.a.lastname,
  email:this.a.email,
  mobile:this.a.mobile,
  countryCode:this.a.countryCode
}
  }
}
