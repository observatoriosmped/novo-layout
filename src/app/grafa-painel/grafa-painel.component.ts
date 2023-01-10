import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MatTableDataSource } from '@angular/material/table'
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

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
  public iframe

  constructor(private responsive: BreakpointObserver, private route: ActivatedRoute, private sanitizer: DomSanitizer, private DetailsGrafana:DashDescriptionService,) {
    
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.separator = this.id.indexOf("&")
    this.separator2 = this.id.indexOf("@@")
    this.url = this.id.slice(this.separator2 + 4, this.separator)
    this.uid = this.id.slice(0, this.separator2)
    this.title = this.id.slice(this.separator + 1, this.id.length)
    //this.source = "https://f5aa-143-107-167-161.sa.ngrok.io/d" + this.url + "?orgId=1" + "&kiosk=true"
    this.source = "http://10.12.128.75:3000/d" + this.url + "?orgId=1" + "&kiosk=true"
    this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl(this.source)

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

  // Botão clicado é a variável que representa o id do botao clicado, retornado via HTML
  abrirMenu(botaoClicado){
    let iframe = document.getElementsByTagName("iframe")[0].contentWindow.document;
    let target;
    // iframe contem todo o HTML carregado pelo grafana
    let graficos = iframe.getElementById('reactRoot').getElementsByTagName("h2");
    // graficos contem um vetor com os elementos h2 que são os titulos de todos os graficos
    for(let i = 0; i < graficos.length; i++){
      if(graficos[i].innerHTML.localeCompare(botaoClicado) == 0){
        target = graficos[i];
      }
    }
    if(!this.menuAberto){ // abre o menu se este não estiver aberto
      target.click();
      this.menuAberto = !this.menuAberto;
    }
    // Aguardar a operação de abrir o menu, para não buscar os itens vazios
    setTimeout(() => {
      let opcoes = iframe.getElementById('reactRoot').getElementsByClassName("dropdown-item-text");
      let botao;
      let escolha = new String();
      for(let i = 0; i < opcoes.length; i++){
        escolha = <String> opcoes[i].innerHTML;
        if(escolha.includes("Inspect")){
          botao = opcoes[i];
        }
      }
      botao.click();
      this.fazerDownload(botaoClicado, iframe);
    }
      ,800);
  
  }
  //Esta funcao é chamada quando o menu inspect do grafana foi aberto
  fazerDownload(botaoApertado, telaGraficos){
    let botaoFechar = telaGraficos.getElementsByTagName("button")[1];
    let botaoDownload = telaGraficos.getElementsByTagName("button")[2];
    botaoDownload.click();
    setTimeout(()=>{
      botaoFechar.click();
      this.menuAberto = false;
      this.retornarFoco(botaoApertado);
    }, 200);
  }
  // Retornar foco para o botão que foi clicado para fins de acessibilidade
  retornarFoco(botaoClicado){
    let botao = document.getElementById(botaoClicado);
    console.log(botao);
    botao.focus();
  }
}
  
