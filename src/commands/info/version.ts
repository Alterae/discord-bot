import { Client, Message } from "discord.js";
import Command from "../../types/command";

/**
 * The version command.  Displays the bot version.
 */
const command: Command = {
  name: "version",
  aliases: ["v"],
  description: "Display version information about the bot.",
  protection: "normal",

  execute: (
    _client: Client,
    message: Message,
    _args: string[],
    _options: string[],
  ) => {
    message.channel.send(
      `This bot's version: \`${process.env.npm_package_version}\``,
    );
  },
};

export default command;
