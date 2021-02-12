import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoServiceService } from 'src/app/todo-service.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
a:any
pass:any
  constructor(private router:ActivatedRoute, private http:TodoServiceService) { }

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
    console.log(data["data"])
  })
  }
}
