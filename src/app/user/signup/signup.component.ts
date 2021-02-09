import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoServiceService } from 'src/app/todo-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  firstname:any
  lastname:any
  mobile:any
  email:any
  password:any

  constructor(private http:TodoServiceService, private route:Router) { }

  ngOnInit(): void {
  }


  signup()
  {
let a={
  firstname:this.firstname,
  lastname:this.lastname,
  mobile:this.mobile,
  email:this.email,
  password:this.password
}

this.http.signup(a).subscribe(
  data=>{
    if(data["status"]==200)
    {
      this.route.navigate(["/login"])
    }
  })
  }
}
