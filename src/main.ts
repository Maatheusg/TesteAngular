import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { TelaPessoasComponent } from './app/tela-pessoas/tela-pessoas.component';
import { Component } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { TesteTelaComponent } from './app/teste-tela/teste-tela.component';

const routes: Routes = [
    { path: '', component: HomeComponent},
    {path: 'tela-pessoas', component: TelaPessoasComponent},
   {path: 'teste-tela', component: TesteTelaComponent}
];

bootstrapApplication(AppComponent, {providers: [provideRouter(routes)]})
  .catch((err) => console.error(err));
 