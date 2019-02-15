import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceProvider {
url:'http://api.contosonatura.com/api/'
  constructor(public http: HttpClient) {
    console.log('Hello ServiceProvider Provider');
  }
getlogin=(username,pass)=>{
let murl=this.url+`UserLogin/Login/${username}/${pass}`
return this.http.get(murl);
}
}
