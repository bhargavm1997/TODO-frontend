import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TodoServiceService } from 'src/app/todo-service.service';
import { HttpClient } from "@angular/common/http";

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
  countryCodeSelected="+91"
  constructor(private httpClient: HttpClient,private http:TodoServiceService, private route:Router, private toaster:ToastrService) { }

  ngOnInit(): void {
    this.httpClient.get("../../assets/countries.json").subscribe(data =>{
      this.countries = data;
    })
  }


  signup()
  {
let a={
  firstName:this.firstname,
  lastName:this.lastname,
  mobileNumber:this.mobile,
  email:this.email,
  password:this.password,
  countryCode:this.countryCodeSelected
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
    else
    {
      this.toaster.warning("Incorrect Email/Password")
    }
  })
  }
}
