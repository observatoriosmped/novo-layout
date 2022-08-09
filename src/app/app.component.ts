import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { PrintService } from './portal/services/print.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Observatório Municipal da Pessoa com Deficiência';
  acessoMobile = false;

  // alternatively also the host parameter in the @Component()` decorator can be used

  constructor(public printService: PrintService, private responsive: BreakpointObserver) {
  }
  ngOnInit(){
    this.responsive.observe([Breakpoints.HandsetPortrait, Breakpoints.TabletPortrait]).subscribe
    (result =>{
      
      this.acessoMobile = false;

      if(result.matches){
        this.acessoMobile = true;
      }
    });
  }
}