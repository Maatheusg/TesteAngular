import { Injectable } from '@angular/core';
import { NOTIFICATION_QUEUE } from '../config';
import {ConnectionRabbitService} from "../serviceConnectionRabbitMq/connection-rabbit.service";


export type INotification ={
  title: string;
  description: string;
};

export const sendNotification = async (notification: INotification) =>{
  const service = new ConnectionRabbitService();
  await service.sendToQueue(NOTIFICATION_QUEUE, notification);

  console.log('Notificação enviada ao consumidor!');
};

export class NotificationService {

  constructor() { }
}
