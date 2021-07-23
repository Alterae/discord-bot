import * as Discord from 'discord.js';
import * as dotenv from 'dotenv';

dotenv.config();

const client = new Discord.Client();

client.once('ready', () => {
  console.log('Ready!');
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
    message.author.id === '274313709579665408' // My ID
  ) {
    await message.channel.send('**Shutting down...**');
    process.exit();
  }
});

client.login(process.env.TOKEN);
