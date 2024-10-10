import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { ConnectionRabbitService } from '../serviceConnectionRabbitMq/connection-rabbit.service';
import { sendNotification } from '../serviceNotification/notification.service';
import { SenderService } from '../serviceSender/sender.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private srvSender: any;
  constructor(private router: Router){
    this.srvSender = new SenderService();
  }
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
    debugger
    nome.value = "";
    idade.value = "";
    //this.srvSender.send(); 
  }

  addNome(nome: string, idade: string): void {
    const raw = JSON.stringify({
      "id": "",
      "nome": nome,
      "idade": idade
    });
  
    fetch('https://apimatheus.azurewebsites.net//api/Pessoas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' // Corrigir aqui (estava 'aplication/json' com erro de digitação)
      },
      body: raw // Aqui você já pode usar a variável "raw"
    })
    .then(res => res.json())
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
