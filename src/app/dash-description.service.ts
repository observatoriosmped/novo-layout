import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class DashDescriptionService {

  constructor(private http:HttpClient, private sanitizer: DomSanitizer) { }

  safeSrc: SafeResourceUrl;

  getDescription(uid: string)
  {
    let url="http://localhost:3000/api/dashboards/uid/" + uid
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer eyJrIjoibkVueHpMTzFKcThkcTIwVnB0RVZRMTgxVDR6QUY4aWIiLCJuIjoidGVzdGUiLCJpZCI6MX0=`
    }) 
    this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl(url);
    return this.http.get(url);    
  }
}
