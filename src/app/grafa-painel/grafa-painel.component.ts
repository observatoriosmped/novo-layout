import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MatTableDataSource } from '@angular/material/table'

@Component({
  selector: 'app-grafa-painel',
  templateUrl: './grafa-painel.component.html',
  styleUrls: ['./grafa-painel.component.css']
})
export class GrafaPainelComponent implements OnInit {

  public id: string;
  public url: string
  public title: string
  public source: string 
  public separator: number
  public length: number
  safeSrc: SafeResourceUrl;

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.separator = this.id.indexOf("&")
    this.url = this.id.slice(2, this.separator)
    this.title = this.id.slice(this.separator + 1, this.id.length)
    this.source = "https://539a-143-107-167-161.sa.ngrok.io/d" + this.url + "?orgId=1&from=1655735341322&to=1655756941322&panelId=2" + "&kiosk=true"
    this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl(this.source)
    console.log(this.safeSrc)
  }



}
