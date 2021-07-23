import * as Discord from 'discord.js';
import * as dotenv from 'dotenv';
import commands from './commands';

// Load environment variables.
dotenv.config();

const client = new Discord.Client();

client.once('ready', () => {
  console.log('Bot started!');
});

client.on('message', async (message) => {
  if (message.content === 'ping') {
    message.channel.send('pong');
  } else if (
    // `!quit` command.  Only I can use it.
    // TODO: Make less janky.
    // TODO: Refactor into proper command.
    // TODO: Load ID from config file instead.
    message.content === '!stop' &&
    message.author.id === process.env.AUTHOR_ID
  ) {
    await message.channel.send('**Shutting down...**');
    process.exit();
  }
});

console.log('Starting bot...');

client.login(process.env.TOKEN);
