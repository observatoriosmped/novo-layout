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
    let url="https://539a-143-107-167-161.sa.ngrok.io/api/dashboards/uid/" + uid
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer eyJrIjoieTFPRWZGb21sWDBUZDd0N1RvZWlvUVB2dk1ieFh2b3EiLCJuIjoib2JzZXJ2YXRvcmlvIiwiaWQiOjF9`
    }) 
    this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl(url);
    return this.http.get(url);    
  }
}
