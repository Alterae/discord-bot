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

  execute: (
    message: Message,
    _args: string[] = [],
    _options: string[] = []
  ) => {
    process.exit();
  },
};

export default command;
