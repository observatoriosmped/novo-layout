import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MatTableDataSource } from '@angular/material/table'
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { HttpClient, HttpParams } from '@angular/common/http';

import {DashDescriptionService} from '../dash-description.service'

@Component({
  selector: 'app-grafa-painel',
  templateUrl: './grafa-painel.component.html',
  styleUrls: ['./grafa-painel.component.css']
})
export class GrafaPainelComponent implements OnInit {

  menuAberto = false;
  acessoMobile = false;
  public id: string;
  public description = []
  public url: string
  public uid: string
  public title: string
  public source: string 
  public separator: number
  public separator2: number
  public length: number
  safeSrc: SafeResourceUrl;
  exportadorURL: string;
  

  constructor(private responsive: BreakpointObserver, private route: ActivatedRoute, private sanitizer: DomSanitizer, private DetailsGrafana:DashDescriptionService,
    private http: HttpClient) {
    
  }

  ngOnInit() {
    
    this.id = this.route.snapshot.paramMap.get('id');
    this.separator = this.id.indexOf("&")
    this.separator2 = this.id.indexOf("@@")
    this.url = this.id.slice(this.separator2 + 4, this.separator)
    this.uid = this.id.slice(0, this.separator2)
    this.title = this.id.slice(this.separator + 1, this.id.length)
    this.source = "https://6d5a-143-107-167-161.sa.ngrok.io/d" + this.url + "?orgId=1" + "&kiosk=true"
    //this.source = "http://localhost:3000/d" + this.url + "?orgId=1" + "&kiosk=true"
    this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl(this.source)
    this.exportadorURL = "";


    this.DetailsGrafana.getDescription(this.uid).subscribe(data=>{
      this.description.push(data)
    })
    document.title=this.title   
    
    this.responsive.observe([Breakpoints.HandsetPortrait, Breakpoints.TabletPortrait]).subscribe
    (result =>{
      
      this.acessoMobile = false;

      if(result.matches){
        this.acessoMobile = true;
      }
    });
  }
  //Chama a API do exportador
  fazerDownload(tituloDoGrafico){

    const params = new HttpParams({fromString: 'titulo=' + tituloDoGrafico});
    const exportadorRequest = this.http.get(this.exportadorURL, {params});

    exportadorRequest.subscribe();
  }
}
  
