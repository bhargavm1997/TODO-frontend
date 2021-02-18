import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from 'src/app/todo-service.service';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  a: any
  countries: any
  countryCodeSelected: any

  constructor(private httpClient: HttpClient, private http: TodoServiceService,private router: Router) { }

  ngOnInit(): void {

    this.a = this.http.getUserInfoFromLocalstorage()
    this.countryCodeSelected = this.a.countryCode
    this.httpClient.get("../../assets/countries.json").subscribe(data => {
      this.countries = data;
    })
  }



  editProfile() {
    let updatedProfile = {
      _id: this.a._id,
      firstname: this.a.firstname,
      lastname: this.a.lastname,
      email: this.a.email,
      mobile: this.a.mobile,
      countryCode: this.a.countryCode
    }
    this.http.updateProfile(updatedProfile).subscribe(data => {
      if (data["status"] == 200) {
        this.http.deleteUserInfoFromLocalstorage();
        this.http.setUserInfoInLocalStorage(data["data"])
        if(data["data"]["email"]==this.a.email){
          this.router.navigate(["/dashboard"])
        }
        else
        {
          this.router.navigate(["/login"])
        }      
      }
    })  
  }
}
