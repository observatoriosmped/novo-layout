import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class DashDescriptionService {

  constructor(private http:HttpClient, private sanitizer: DomSanitizer) { }

  safeSrc: SafeResourceUrl;

  // getDescription(uid: string)
  // {
  // let url="http://localhost:3000/api/dashboards/uid/" + uid
  //  const headers = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Authorization': `Bearer glsa_t4PlP5G3Xbvjzd9ZDRvsmjWQK4COKKBm_7b550827`
  //   }) 
  //   this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl(url);
  //   return this.http.get(url);    
  // }

//  getDescription(uid: string)
//  {
//    let url="https://f5aa-143-107-167-161.sa.ngrok.io/api/dashboards/uid/" + uid
//    const headers = new HttpHeaders({
//      'Content-Type': 'application/json',
//      'Authorization': `Bearer eyJrIjoieTFPRWZGb21sWDBUZDd0N1RvZWlvUVB2dk1ieFh2b3EiLCJuIjoib2JzZXJ2YXRvcmlvIiwiaWQiOjF9`
//    }) 
//    return this.http.get(url, {headers: headers});    
//  }

getDescription(uid: string)
  {
    let url="http://10.12.128.75:4200/api/dashboards/uid/" + uid
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer eyJrIjoiRmwyc3E2SWNPUEpRMTFvSkpscTVvd2s5THU0RTk2MVYiLCJuIjoibm92by1wb3J0YWwtZ3JhZmFuYSIsImlkIjoxfQ==`
    }) 
    return this.http.get(url, {headers: headers});    
  }

  /*getDescription(uid: string)
  {
    let url="http://172.18.0.5/api/dashboards/uid/" + uid
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer eyJrIjoieTFPRWZGb21sWDBUZDd0N1RvZWlvUVB2dk1ieFh2b3EiLCJuIjoib2JzZXJ2YXRvcmlvIiwiaWQiOjF9`
    }) 
    return this.http.get(url, {headers: headers});    
  */



  
}
