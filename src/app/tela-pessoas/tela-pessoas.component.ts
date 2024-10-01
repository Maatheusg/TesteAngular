import { CommonModule } from '@angular/common';
import { Component, TemplateRef } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';

@Component({
  selector: 'app-tela-pessoas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tela-pessoas.component.html',
  styleUrl: './tela-pessoas.component.scss'
})
export class TelaPessoasComponent {
  pessoas: any[] = [];
  pessoaSelecionada: any = Object;
  isPopupOpen = false;
  constructor(private dialog: MatDialog){};
  carregarPessoas(): any
  {
      fetch('https://apimatheus.azurewebsites.net/api/Pessoas', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
      })
      .then((response) => response.text())
      .then((result) => {return JSON.parse(result)})
      .then((data) => this.pessoas = data)
      .catch(error => {
        console.error('Error:', error);
      });
  }
  ngOnInit(): void{
    this.carregarPessoas();
  }
  apagarPessoa(idPessoa:string): void{
    if(confirm('Deseja mesmo apagar essa pessoa?'))
    {
      fetch('https://apimatheus.azurewebsites.net/api/Pessoas/deletar'+idPessoa, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((response) => {response.text();
        location.reload();
      })
      .catch(error => console.log('Error', error));
    }
  }

  abrirCard(templateRef: TemplateRef<any>, pessoaid:number): void{
    //this.pessoaSelecionada = this.pessoa;
    debugger
    fetch('https://apimatheus.azurewebsites.net/api/Pessoas/' + pessoaid, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
      })
      .then((response) => response.text())
      .then((result) => {return JSON.parse(result)})
      .then((data) => {this.pessoaSelecionada = data; debugger})
      .catch(error => {
        console.error('Error:', error);
      });
    this.dialog.open(templateRef);
  }

  fecharCard(): void{
    this.dialog.closeAll();
  }
}
