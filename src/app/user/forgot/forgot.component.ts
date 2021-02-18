import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from 'src/app/todo-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {
  username: any

  constructor(private http: TodoServiceService, private toaster: ToastrService) { }

  ngOnInit(): void {
  }
  sendLink() {
    var data = {
      email: this.username
    }
    this.http.forgot(data).subscribe(
      data => {
        this.toaster.success("Link sent successfully")

      })



  }
}
