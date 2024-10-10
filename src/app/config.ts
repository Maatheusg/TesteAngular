import { config } from "dotenv";

config();

export const rmqUser = process.env['RABBITMQ_USER'] || 'defaultUser';
export const rmqPass = process.env['RABBITMQ_PASS'] || 'defaultPass';
export const rmqHost = process.env['RABBITMQ_URL'] || 'localhost';


export const NOTIFICATION_QUEUE = "@notification";