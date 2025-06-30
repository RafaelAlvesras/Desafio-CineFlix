// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { FilmesComponent } from './pages/filmes/filmes.component';
import { SessoesComponent } from './pages/sessoes/sessoes.component';
import { AssentosComponent } from './pages/assentos/assentos.component';
import { SucessoComponent } from './pages/sucesso/sucesso.component';

export const routes: Routes = [
  { path: '', component: FilmesComponent },
  { path: 'sessoes/:idFilme', component: SessoesComponent },
  { path: 'assentos/:idSessao', component: AssentosComponent },
  { path: 'sucesso', component: SucessoComponent },
];
