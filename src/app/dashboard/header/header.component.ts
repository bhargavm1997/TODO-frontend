import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from 'src/app/todo-service.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
a:any
  constructor(private http:TodoServiceService, private route:Router,private toaster:ToastrService) { }

  ngOnInit(): void {

    this.a=this.http.getUserInfoFromLocalstorage()
  }

  logout()
  {
    this.http.deleteUserInfoFromLocalstorage()
    this.toaster.success("Logged out successfully")
    setTimeout(() => {

      
    this.route.navigate(["/login"])

    }, 2000);
  }

}
