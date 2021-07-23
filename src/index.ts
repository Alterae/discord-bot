import { Client, Message } from 'discord.js';
import * as dotenv from 'dotenv';

dotenv.config({ path: __dirname + '/.env' });

const client = new Client();

client.once('ready', () => {
  console.log('Ready!');
});

client.on('message', (message) => {
  if (message.content === 'ping') {
    message.channel.send('pong');
  }
});

client.login(process.env.TOKEN);
