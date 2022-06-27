import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GrafanaDashsService {

  constructor(private http:HttpClient) { }

  //getData()
  //{
  //  let url="http://localhost:3000/api/search"
  //  const headers = new HttpHeaders({
  //    'Content-Type': 'application/json',
  //    'Authorization': `Bearer eyJrIjoibkVueHpMTzFKcThkcTIwVnB0RVZRMTgxVDR6QUY4aWIiLCJuIjoidGVzdGUiLCJpZCI6MX0=`
  //  }) 
  //  return this.http.get(url, {headers: headers});    
  //}

  getData()
  {
    let url="https://539a-143-107-167-161.sa.ngrok.io/api/search"
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer eyJrIjoieTFPRWZGb21sWDBUZDd0N1RvZWlvUVB2dk1ieFh2b3EiLCJuIjoib2JzZXJ2YXRvcmlvIiwiaWQiOjF9`
    }) 
    return this.http.get(url, {headers: headers});    
  }


}
