import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InitialPageComponent } from './components/initial-page/initial-page.component';
import { ObjectiveContentComponent } from './components/objective-content/objective-content.component';
import { MapaServicosComponent } from './components/mapa-servicos/mapa-servicos.component';
import { ContatoContentComponent } from './components/contato-content/contato-content.component';
import { AjudaContentComponent } from './components/ajuda-content/ajuda-content.component';
import { GrafaPainelComponent } from './grafa-painel/grafa-painel.component';




const routes: Routes = [
  { path: '', component: InitialPageComponent },
  { path: 'quem-somos', component: ObjectiveContentComponent },
  { path: 'mapa-rede-servicos-acessiveis', component: MapaServicosComponent },
  { path: 'contatos', component: ContatoContentComponent },
  { path: 'ajuda', component: AjudaContentComponent },
  { path: 'dash/:id', component: GrafaPainelComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
