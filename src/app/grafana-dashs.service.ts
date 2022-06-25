import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GrafanaDashsService {

  constructor(private http:HttpClient) { }

  getData()
  {
    let url="http://localhost:3000/api/search"
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer eyJrIjoibkVueHpMTzFKcThkcTIwVnB0RVZRMTgxVDR6QUY4aWIiLCJuIjoidGVzdGUiLCJpZCI6MX0=`
    }) 
    return this.http.get(url, {headers: headers});    
  }
}
