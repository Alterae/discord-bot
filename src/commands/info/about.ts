import { Message } from 'discord.js';
import Command from '../../types/command';

const command: Command = {
  name: 'about',
  aliases: ['info'],
  description: 'Display info about the bot.',
  protection: 'normal',

  execute: (message: Message, _args: string[], _options: string[]) => {
    // TODO: Add website link when website happens.
    // TODO: Figure out a way to make this less gross.
    // TODO: Make these values not hardcoded.
    message.channel.send(
      `**\`discord-bot\` by Alterae**\n*A general-purpose discord bot written in TypeScript*\n__version:__ ${process.env.npm_package_version}\n__github:__ https://github.com/Alterae/discord-bot`
    );
  },
};

export default command;
