import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  postEmploye(data : any){
    return this.http.post("http://localhost:3000/posts", data)
      .pipe(map((res:any)=>{
        return res;
      }))
  }
}
