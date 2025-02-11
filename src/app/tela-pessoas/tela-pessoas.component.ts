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
      fetch('https://apimatheus.azurewebsites.net/api/Pessoas/sendToQueueDelete?id='+idPessoa, {
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
    fetch('https://apimatheus.azurewebsites.net/api/Pessoas/' + pessoaid, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => response.text())
    .then((result) => {return JSON.parse(result)})
    .then((data) => {this.pessoaSelecionada = data; })
    .catch(error => {
      console.error('Error:', error);
    });
    this.dialog.open(templateRef);
  }

  fecharCard(): void{
    this.dialog.closeAll();
  }

  atualizarPessoa():void{    
    debugger
    let nome = this.pessoaSelecionada.nome
    let idade = this.pessoaSelecionada.idade
    let endereco = document.getElementById('enderecoId') as HTMLInputElement
    let cpf = document.getElementById('cpfId') as HTMLInputElement
    let telefone = document.getElementById('telefoneId') as HTMLInputElement
    const raw = JSON.stringify({
      "id": "", 
      "nome": nome,
      "idade": idade,
      "telefone": telefone.value,
      "endereco": endereco.value,
      "cpf": cpf.value
    });
  
    fetch('https://apimatheus.azurewebsites.net/api/Pessoas/sendToQueuePut?id=' + this.pessoaSelecionada.id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json' // Corrigir aqui (estava 'aplication/json' com erro de digitação)
      },
      body: raw // Aqui você já pode usar a variável "raw"
    })
    .then(res => {res.json();alert('Pessoa atualizada!')})
    .catch(error => {
      alert('Ocorreu um erro!');
    });
  }
}