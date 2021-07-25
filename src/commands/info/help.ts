import { Client, Message } from "discord.js";
import Command from "../../types/command";
import commands from "../../commands";

/**
 * The help command.  Displays all the available commands.
 *
 * TODO: Add support for `help [command]`.
 */
const command: Command = {
  name: "help",
  aliases: ["?"],
  description: "Lists available commands.",
  protection: "normal",

  execute: (
    _client: Client,
    message: Message,
    _args: string[],
    _options: string[],
  ) => {
    let response = "";

    commands.forEach((cmd) => {
      if (cmd.protection !== "normal") return;

      response += `**\`${cmd.name}\`:**\n  __aliases:__ ${listAliases(
        cmd,
      )}\n  __description:__ ${cmd.description}\n\n`;
    });

    message.channel.send(response);
  },
};

/**
 * Lists the aliases of the provided command.
 * @param cmd The command to list the aliases of.
 * @returns The list of aliases.
 */
const listAliases = (cmd: Command): string => {
  if (cmd.aliases === []) return "none";
  let response = "";
  cmd.aliases.forEach((alias) => {
    response += `\`${alias}\`, `;
  });

  // Strip the ', ' off the last alias
  return response.replace(/, $/g, "");
};

export default command;
