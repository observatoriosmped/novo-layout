import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, HostListener, OnChanges, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AcessibilidadeDialogComponent } from 'src/app/portal/acessibilidade-dialog/acessibilidade-dialog.component';


@Component({
  selector: 'app-acessibility-bar',
  templateUrl: './acessibility-bar.component.html',
  styleUrls: ['./acessibility-bar.component.css']
})
export class AcessibilityBarComponent {

  public divsArray = document.getElementsByTagName('div');
  public psArray = document.getElementsByTagName('p');
  public hsArray = document.getElementsByTagName('h1');
  public h2sArray = document.getElementsByTagName('h2');
  public asArray = document.getElementsByTagName('a');
  public ulsArray = document.getElementsByTagName ('ul');
  public situationContrast = false;
  public situationFontSize = false;
  public loggedIn = false;
  public isPaginaInicial = true;
  public isTabVisivel = 0;
  private isDialogOpen = false;

  constructor(private scroll: ViewportScroller, private router: Router, public dialog: MatDialog, private elementRef: ElementRef) { 
    router.events.subscribe((val) => {
      if (this.router.url === '/paineis') {
        this.isPaginaInicial = true;
        document.getElementById("irBusca").tabIndex = 0;
        //this.isTabVisivel = 0;
      } else {
        this.isPaginaInicial = false;
        document.getElementById("irBusca").tabIndex = -1;
        //this.isTabVisivel = -1;
      }
    })

    this.dialog._afterAllClosed.subscribe(n => {
      this.isDialogOpen = false;
    });
  }

  ngOnInit(): void {    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });

        document.querySelector(this.getAttribute('href')).click();
      });
    });
  } 

  irConteudo() {
    document.getElementById("content").scrollIntoView();
    document.getElementsByTagName("h1")[0].focus();
  }

  irMenu() {
    document.getElementById("menubar").scrollIntoView();
    document.getElementById("pgInicial").focus();
  }

  irRodape() {
    document.getElementById("footertext1").scrollIntoView();
    document.getElementById("footertext1").focus();
  }

  aumentarFonte(){
    if (this.situationFontSize === false){
      for (let p of this.psArray){
        if (p.className != 'donotchange'){
          p.style.fontSize = "36px"
          p.style.lineHeight = '40px'
        }
      }
      for (let a of this.asArray){
        if (a.className != 'donotchange' && 
        a.className != 'hover' && 
        a.className != 'fontsize' && 
        a.className != 'hover2' && 
        a.className != 'hover3' && 
        a.className != 'fontsize2'){
          a.style.fontSize = "40px"
          a.style.lineHeight = '44px'
        } else if (a.className === 'hover2' || 
        a.className === 'hover3') {
          a.style.fontSize = "26px"
          a.style.lineHeight = '30px'
        } else if(a.className === 'hover'){
          a.style.fontSize = "36px"
          a.style.lineHeight = '40px'
        }
      }
      this.situationFontSize = true;
    } else {
      alert("A fonte já está aumentada.")
    }
  }

  diminuirFonte(){
    if (this.situationFontSize === true){
      for (let p of this.psArray){
        if (p.className != 'donotchange'){
          p.style.fontSize = ""
          p.style.lineHeight = ''
        }
      }
      for (let h of this.hsArray){
        if (h.className != 'donotchange'){
          h.style.fontSize = ""
          h.style.lineHeight = ''
        }
      }
      for (let a of this.asArray){
        if (a.className != 'donotchange'){
          a.style.fontSize = ""
          a.style.lineHeight = ''
        }
      }  
      this.situationFontSize = false;
    } else {
      alert("A fonte já está no mínimo.")
    }
  
}

  altoContraste() {
    if (this.situationContrast === true) {
      for (let div of this.divsArray){
        if (div.className != 'donotchange' &&
        div.className != 'sem-resposta'){
          div.style.backgroundColor = null;
          div.style.color = null;    
          div.style.boxShadow = null;
          div.style.border = null
        }
      }
    
      for (let p of this.psArray){
        if (p.className != 'donotchange'){
          p.style.backgroundColor = null;
          p.style.color = null;   
          p.style.boxShadow = null;
          p.style.border = null  
        }
      }
      for (let h of this.hsArray){
        if (h.className != 'donotchange'){
          h.style.backgroundColor = null;
          h.style.color = null; 
          h.style.boxShadow = null;
          h.style.border = null     
        }
      }
      for (let h2 of this.h2sArray){
        if (h2.className != 'donotchange'){
          h2.style.backgroundColor = null;
          h2.style.color = null; 
          h2.style.boxShadow = null;
          h2.style.border = null     
        }
      }
      for (let a of this.asArray){
        if (a.className != 'donotchange'){
          a.style.backgroundColor = null;
          a.style.color = null
          a.style.boxShadow = null;
          a.style.border = null
          if (a.className === 'hover3'){
            a.classList.remove('hover3');
            a.classList.add('hover2');
          }  
          if (a.className == 'fontsize2'){
            a.classList.remove('fontsize2');
            a.classList.add('fontsize');
          }    
        }
      }
      this.situationContrast = false;
    } else {
      for (let div of this.divsArray){
        if (div.className != 'donotchange' &&
        div.className != 'content' &&
        div.className != 'mat-card-header-text' &&
        div.className != 'descricao' &&
        div.className != 'autor' &&
        div.className != 'tema' &&
        div.className != 'mat-form-field-prefix ng-tns-c49-0 ng-star-inserted' &&
        div.className != 'content' &&
        div.className != 'mat-form-field-flex ng-tns-c49-0' &&
        div.className != 'big pesquisa' && 
        div.className != 'mat-form-field-wrapper ng-tns-c49-0' &&
        div.className != 'mat-form-field-underline ng-tns-c49-0 ng-star-inserted' &&
        div.className != 'mat-form-field-infix ng-tns-c49-0' &&
        div.className != 'sem-resposta' &&
        div.className != 'lista-paineis' &&
        div.className != 'mat-form-field-wrapper ng-tns-c107-0' &&
        div.className != 'mat-form-field-infix ng-tns-c107-0' &&
        div.className != 'mat-form-field-prefix ng-tns-c107-0 ng-star-inserted' &&
        div.className != 'mat-form-field-flex ng-tns-c107-0' &&
        div.className != 'mat-form-field-flex ng-tns-c107-4' &&
        div.className != 'mat-form-field-prefix ng-tns-c107-1 ng-star-inserted' &&
        div.className != 'ng-tns-c107-1' &&
        div.className != 'mat-form-field-flex ng-tns-c107-2' &&
        div.className != 'mat-form-field-wrapper ng-tns-c107-1' &&
        div.className != 'mat-form-field-flex ng-tns-c107-4' &&
        div.className != 'mat-form-field-prefix ng-tns-c107-1 ng-star-inserted' &&
        div.className != 'ng-tns-c107-1' &&
        div.className != 'mat-form-field-flex ng-tns-c107-2' &&
        div.className != 'big pesquisa'
        ){
          div.style.backgroundColor = 'black';
          div.style.color = 'white';         
        }
        if (div.className === 'big pesquisa' ||
        div.className === 'mat-form-field-wrapper ng-tns-c49-0' ||
        div.className === 'mat-form-field-underline ng-tns-c49-0 ng-star-inserted' ||
        div.className === 'mat-form-field-infix ng-tns-c49-0'){
          div.style.backgroundColor = 'white';
          div.style.color = 'black'; 
        }
        if (div.className === "footer-basic") {
          div.style.backgroundColor = 'white'
        }
        if (div.className === 'img') {
          div.style.backgroundColor = 'white';
          div.style.border = '2px solid #000' 
        }
      }
      for (let p of this.psArray){
        if (p.className != 'donotchange'){
          p.style.backgroundColor = 'black';
          p.style.color = 'white';
          p.style.boxShadow = '0 0 0 2px #000';   
          p.style.border = '2px solid #ffeb3b' 
        }
      }
      for (let h of this.hsArray){
        if (h.className != 'donotchange'){
          h.style.backgroundColor = 'black';
          h.style.color = 'white';
          h.style.boxShadow = '0 0 0 2px #000'; 
          h.style.border = '2px solid #ffeb3b'
        }
      }
      for (let h2 of this.h2sArray){
        if (h2.className != 'donotchange'){
          h2.style.backgroundColor = 'black';
          h2.style.color = 'white';
          h2.style.boxShadow = '0 0 0 2px #000'; 
          h2.style.border = '2px solid #ffeb3b'
        }
      }      
      for (let a of this.asArray){
        if (a.className != 'donotchange' && 
        a.className != 'hover' && 
        a.className != 'hover2'){
          a.style.backgroundColor = 'black';
          a.style.color = 'white';
          a.style.boxShadow = '0 0 0 2px #000';
          a.style.border = '2px solid #ffeb3b'
          if(a.className === 'fontsize') {
            a.classList.remove('fontsize');
            a.classList.add('fontsize2');
            a.style.boxShadow = '0 0 0 2px #000';
            a.style.border = '2px solid #ffeb3b'
          }     
        } else if (a.className === 'hover2'){
          a.classList.remove('hover2');
          a.classList.add('hover3');
          a.style.boxShadow = '0 0 0 2px #000';
          a.style.border = '2px solid #ffeb3b'
        } else if (a.className === 'hover') {
          a.style.boxShadow = '0 0 0 2px #000';
          a.style.border = '2px solid #ffeb3b'
        }
      }
      for (let ul of this.ulsArray){
        if (ul.id === 'atalhos'){
          ul.style.backgroundColor = 'black';
        }
      }
      this.situationContrast = true;
    }
  }

  openDialog() {
    if (!this.isDialogOpen) {
      this.dialog.open(AcessibilidadeDialogComponent);
      this.isDialogOpen = true;
    } else {
      this.dialog.closeAll();
      this.isDialogOpen = false;
    }
  }

  closeDialog() {
    this.dialog.closeAll();
  }

  onKeyPressAcess(e: KeyboardEvent){
    if(e.keyCode == 13){
      if (!this.isDialogOpen) {
        this.openDialog();
      }
    }
  }

  onKeyPressConteudo(e: KeyboardEvent){
    if(e.keyCode == 13){
      this.irConteudo();
    }
  }

  @HostListener('document:keydown', ['$event']) //Teclas de atalho
  onKeyDown(e: KeyboardEvent){
    let map = {};
    map[e.keyCode] = e.type == 'keydown';

    if (e.altKey && map[49]){
      document.getElementById("irConteudo").click();
    } else if ( e.altKey && map[50]){
      document.getElementById("irMenu").click();
    }else if ((e.altKey && map[51])){    
      document.getElementById("irRodapé").click();
    } else if ((e.altKey && map[52])){ 
      document.getElementById("irContraste").click();
    } else if ((e.altKey && map[53])){    
      document.getElementById("irAcessibilidade").click();
    } else if ((e.altKey && map[54])){    
      document.getElementById("aumentar").click();
    } else if ((e.altKey && map[55])){    
      document.getElementById("diminuir").click();
    }
  }

}
