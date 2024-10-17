import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private router: Router){}

  click(): void {
    let nome = document.getElementById('nomeInput') as HTMLInputElement
    let idade = document.getElementById('idadeInput') as HTMLInputElement
    
    if(nome.value == "" || idade.value == "")
    {
        alert('Não é permitido enviar valores vazios!')
    }
    else
    {
      this.addNome(nome.value, idade.value)
    }

    nome.value = "";
    idade.value = "";
    
  }

  addNome(nome: string, idade: string): void {
    const raw = JSON.stringify({
      "id": "",
      "nome": nome,
      "idade": idade,
      "telefone": "",
      "endereco": "",
      "cpf": ""
    });
  
    fetch('https://apimatheus.azurewebsites.net/api/Pessoas/sendToQueue', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' // Corrigir aqui (estava 'aplication/json' com erro de digitação)
      },
      body: raw // Aqui você já pode usar a variável "raw"
    })
    .then(res => {debugger;res.json()})
    .then(data => {
      alert('Pessoa adicionada!');
    })
    .catch(error => {
      alert('Ocorreu um erro!');
    });

  }

  abrirNovaTela(): void {
    this.router.navigate(['/tela-pessoas']);
  }
  abrirNovaTelaDois(): void {
    this.router.navigate(['/teste-tela']);
  }
}
