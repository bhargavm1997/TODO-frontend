import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
  countries:any
  countryCode:any
  constructor(private http:TodoServiceService, private route:Router, private toaster:ToastrService) { }

  ngOnInit(): void {
    
  }


  signup()
  {
let a={
  firstname:this.firstname,
  lastname:this.lastname,
  mobile:this.mobile,
  email:this.email,
  password:this.password,
  countryCode:this.countryCode
}

this.http.signup(a).subscribe(
  data=>{
    if(data["status"]==200)
    {
      this.toaster.success("Sign Up Successful")
      setTimeout(() => {

        
      this.route.navigate(["/login"])

      }, 2000);

    }
  })
  }
}
