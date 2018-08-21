import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  users;
   constructor(private http: HttpClient) {
      this.http.get('http://dev.api.fooddocs.ee/testtask').subscribe(res =>{
        console.log('res',res);
        this.users = res;
      })
    }
  remove(i){
    this.users = this.users.filter(item=>item.id!==i)
  }
}
