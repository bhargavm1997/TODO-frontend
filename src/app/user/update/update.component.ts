import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoServiceService } from 'src/app/todo-service.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
a:any
pass:any
  constructor(private router:ActivatedRoute, private http:TodoServiceService,private route:Router, private toaster:ToastrService) { }

  ngOnInit(): void {
    this.a=this.router.snapshot.paramMap.get("email")
  }

  update()
  {
    var data={
      email:this.a,
      password:this.pass

    }
this.http.updatePass(data).subscribe(
  data=>{
    if(data["status"]==200)
    {
    this.toaster.success("Password updated successfully")
      setTimeout(() => {

        
      this.route.navigate(["/login"])

      }, 2000);
  }
});
  }
}