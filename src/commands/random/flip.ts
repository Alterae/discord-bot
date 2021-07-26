import { Client, Message } from "discord.js";
import Command from "../../types/command";

/**
 * The flip command.  Flips a coin.
 * TODO: Implement flipping multiple coins.
 */
const command: Command = {
  name: "flip",
  aliases: ["coin"],
  description: "Flips a coin.",
  protection: "normal",

  execute: (
    _client: Client,
    message: Message,
    _args: string[],
    _options: string[],
  ) => {
    let result: string;

    if (Math.random() >= 0.5) {
      result = "heads";
    } else {
      result = "tails";
    }

    message.channel.send(`Coin flip result: **${result}**!`);
  },
};

export default command;
