import { Message } from 'discord.js';
import Command from '../../types/command';

/**
 * The stop command.  Stops the bot.
 */
const command: Command = {
  name: 'stop',
  aliases: ['kill', 'shutdown', 'quit', 'exit'],
  description: 'Stops execution of the bot program.',
  protection: 'protected',

  execute: async (
    message: Message,
    _args: string[] = [],
    _options: string[] = []
  ) => {
    if (message.author.id !== process.env.AUTHOR_ID) {
      console.warn(`User ${message.author} atttempted to stop the bot.`);
      return;
    }
    console.log('Recieved shutdown command.  Stopping...');
    await message.channel.send('**Shutting down...**');
    process.exit();
  },
};

export default command;
