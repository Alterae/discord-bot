import { Client, Message } from 'discord.js';
import Command from '../types/command';

/**
 * The help command.  This one is special because it is just a function and it
 * takes an extra parameter (the list of commands).  Displays a list of commands.
 *
 * FIXME: Currently bad and hardcoded in a way that does not support aliases.
 *
 * TODO: Refactor to a real command.
 *
 * TODO: Add support for `help [command]`
 *
 * @param message The message to respond to.
 * @param commands The list of commands provided by the bot.
 * @param _args The arguments passed to the command.
 * @param _options The options passed to the command.
 */
const help = (
  _client: Client,
  message: Message,
  commands: Command[],
  _args: string[],
  _options: string[]
) => {
  let response =
    '**`help`:**\n  __aliases:__ none\n  __description:__ Lists all available commands.\n\n';

  commands.forEach((cmd) => {
    if (cmd.protection !== 'normal') return;

    response += `**\`${cmd.name}\`:**\n  __aliases:__ ${listAliases(
      cmd
    )}\n  __description:__ ${cmd.description}\n\n`;
  });

  message.channel.send(response);
};

/**
 * Lists the aliases of the provided command.
 * @param cmd The command to list the aliases of.
 * @returns The list of aliases.
 */
const listAliases = (cmd: Command): string => {
  if (cmd.aliases === []) return 'none';
  let response = '';
  cmd.aliases.forEach((alias) => {
    response += `\`${alias}\`, `;
  });

  // Strip the ', ' off the last alias
  return response.replace(/, $/g, '');
};

export default help;
