import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
  private url="http://localhost:3000/api/v1"

  constructor(private http:HttpClient) { }

  signup(data)
  {
return this.http.post(this.url + "/signup" ,data)
  }


  login(data)
  {
    console.log(data)
    return this.http.post(this.url + "/login" ,data)
  }

  addTodo(data)
  {
    return this.http.post(this.url + "/addTodo",data)
  }



  public setUserInfoInLocalStorage = (data) =>{
    localStorage.setItem('userInfo', JSON.stringify(data))
  }


  public getUserInfoFromLocalstorage = () => {

    return JSON.parse(localStorage.getItem('userInfo'));

  } 



  getTodo()
  {
    return this.http.get(this.url + "/getTodo")
  }
  singleView(data)
  {
return this.http.get(this.url + "/singleView?id=" + data)
  }



  count()
  {
   // return this.http.get()
  }

  


  update(data)
  {
return this.http.put(this.url + "/update?id=" + data._id,data)
  }


  forgot(data)
  {
    return this.http.post(this.url + "/forgot" ,data)
  }


  updatePass(data)
  {
    return this.http.put(this.url + "/updatePass", data)
  }


}
