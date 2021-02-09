import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoServiceService } from '../todo-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  username:any
  password:any
  constructor(private http:TodoServiceService, private route:Router) { }

  ngOnInit(): void {
  }


  login()
  {
let a={
  email:this.username,
  password:this.password
}
this.http.login(a).subscribe(
  data=>{
      console.log(data)

    if(data["status"]==200)
    {
this.http.setUserInfoInLocalStorage(data["data"])
     this.route.navigate(["/dashboard"])
    }
  })

  }
}
