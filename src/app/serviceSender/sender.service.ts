import { Injectable } from '@angular/core';
import { ConnectionRabbitService } from '../serviceConnectionRabbitMq/connection-rabbit.service';
import { sendNotification } from '../serviceNotification/notification.service';

@Injectable({
  providedIn: 'root'
})
export class SenderService {
  private mqConnection: any;
  constructor() {
    //const srvSendNotification = new sendNotification();
    
    this.mqConnection = new ConnectionRabbitService();
  }
  async send(){
    await  this.mqConnection.connect();

    const newNotification = {
        title: "Você recebeu uma notificação.",
        description: "Você reecbeu uma nova notificalça do serviço."
    };

    sendNotification(newNotification);
  }
}
