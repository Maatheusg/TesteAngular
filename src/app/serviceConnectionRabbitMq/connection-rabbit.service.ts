import { Injectable } from '@angular/core';
import client, {Connection, Channel, ConsumeMessage} from "amqplib"
import {rmqUser, rmqPass, rmqHost} from  '../config';

@Injectable({
  providedIn: 'root'
})
export class ConnectionRabbitService {
  connection!: Connection;
  channel!: Channel;
  private connected!: Boolean

  async connect(){
    if(this.connected && this.channel) return;
    else this.connected = true;

    try {
      console.log('Connecting to RabbitMQ server')
      this.connection = await client.connect(
        `amqp://${rmqUser}:${rmqPass}@${rmqHost}:5672`
      );

      console.log('Conexão com RabbitMQ está pronta!');

      this.channel = await this.connection.createChannel();

      console.log('Canal do RabbitMQ criado com sucesso!');
    } catch (error){
      console.error(error);
      console.error('Não foi possível conectar ao servidor MQ');
    }
  }

  async sendToQueue(queue: string, message: any){
    try{
      if(!this.channel){
        //await this.connect();
      }
      debugger
      //this.channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)));
    }catch (error){
      console.error(error);
      throw error;
    }
  }

  
  constructor() { 
  }
}
