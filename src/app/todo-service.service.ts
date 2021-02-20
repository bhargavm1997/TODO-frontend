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
  getTodo(id,friendArray) {
    return this.http.get(this.url + "/getTodo?id="+id+"&&friends="+friendArray)
  }
  userDetailsByEmail(email)
  {
    return this.http.get(this.url + "/userDetailsByEmail?email="+email)

  }
  userDetailsById(id)
  {
    return this.http.get(this.url + "/userDetailsById?id="+id)

  }
  singleView(data) {
    return this.http.get(this.url + "/singleView?id=" + data)
  }
  friendList(userId) {
    return this.http.get(this.url + "/friendList?id=" + userId)
  }
   count(id) {
     return this.http.get(this.url + "/taskCount?id=" +id)
  }
  friendCount(id) {
    return this.http.get(this.url + "/friendCount?id=" +id)
 }

 deleteTask(taskId,loggedIn) {
    console.log(loggedIn)
    return this.http.delete(this.url + "/deleteTask?id=" + taskId+"&&_id="+loggedIn)

  }
  taskHistory(taskId) {
    return this.http.get(this.url + "/getTaskHistory?id="+taskId)

  }
  updateProfile(data) {
    return this.http.put(this.url + "/updateProfile?id=" + data._id, data)
  }
  undoTaskHistory(taskHistoryId) {
    return this.http.delete(this.url + "/undoTaskHistory?id=" + taskHistoryId)
  }
  getNotification(id) {
    return this.http.get(this.url + "/getNotification?id=" + id)
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
