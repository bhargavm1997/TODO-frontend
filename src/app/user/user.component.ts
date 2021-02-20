import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoServiceService } from '../todo-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  username: any
  password: any
  constructor(private http: TodoServiceService, private router: Router,private toastr: ToastrService ) { }

  ngOnInit(): void {
  }


  login() {
    if (!this.username) {
      this.toastr.warning('enter email')


    } else if (!this.password) {

      this.toastr.warning('enter password')


    }else
    {
      let data = {
        email: this.username,
        password: this.password
      }

      this.http.login(data)
        .subscribe((apiResponse) => {

          if (apiResponse["status"] === 200) {

             this.http.setUserInfoInLocalStorage(apiResponse["data"]["userDetails"])
            
             this.router.navigate(['/dashboard']);

          } else {

            this.toastr.error(apiResponse["message"])
          

          }

        }, (err) => {
          this.toastr.error('some error occured')

        });

    }
  }
}
