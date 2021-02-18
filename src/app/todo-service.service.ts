import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
  private url = "http://localhost:3000/api/v1"

  constructor(private http: HttpClient) { }

  signup(data) {
    return this.http.post(this.url + "/signup", data)
  }


  login(data) {
    console.log(data)
    return this.http.post(this.url + "/login", data)
  }

  addTodo(data) {
    return this.http.post(this.url + "/addTodo", data)
  }

  public setUserInfoInLocalStorage = (data) => {
    localStorage.setItem('userInfo', JSON.stringify(data))
  }

  public deleteUserInfoFromLocalstorage = () => {
    localStorage.removeItem('userInfo');
  }


  public getUserInfoFromLocalstorage = () => {

    return JSON.parse(localStorage.getItem('userInfo'));

  }



  getTodo() {
    return this.http.get(this.url + "/getTodo")
  }
  singleView(data) {
    return this.http.get(this.url + "/singleView?id=" + data)
  }
  friendList(userId) {
    return this.http.get(this.url + "/friendList?id=" + userId)
  }


  count() {
    // return this.http.get()
  }

  deleteTask(taskId) {
    return this.http.delete(this.url + "/deleteTask?id=" + taskId)

  }
  updateProfile(data) {
    return this.http.put(this.url + "/updateProfile?id=" + data._id, data)
  }

  update(data) {
    return this.http.put(this.url + "/update?id=" + data._id, data)
  }


  forgot(data) {
    return this.http.post(this.url + "/forgot", data)
  }


  updatePass(data) {
    return this.http.put(this.url + "/updatePass", data)
  }

  addFriend(data) {
    return this.http.post(this.url + "/addFriend", data)
  }

}
