import { Client, Message } from 'discord.js';
import dotenv from 'dotenv';

dotenv.config();

const client = new Client();

client.once('ready', () => {
  console.log('Ready!');
});

client.login(process.env.TOKEN);
