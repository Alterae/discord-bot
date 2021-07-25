import "colors";
import * as Discord from "discord.js";
import * as dotenv from "dotenv";
import commands from "./commands";
import help from "./commands/help";

const prefix = "!"; // TODO: Make prompt non-hardcoded

// Load environment variables
dotenv.config();

const client = new Discord.Client();

client.once("ready", () => {
  client.user.setPresence({
    activity: { name: `${prefix}help`, type: "LISTENING" },
    status: "online",
  });
  console.log("Bot started!".green.bold);
});

client.on("message", (message) => {
  // Ignore messages that don't start with the prefix, or are sent by bots
  if (!message.content.startsWith(prefix) || message.author.bot) {
    return;
  }

  // TODO: Improve parsing logic to support multi-word (quoted) args, flags
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if (command === "help") {
    help(client, message, commands, args, []);
    return;
  }

  commands.forEach((cmd) => {
    if (!(cmd.name === command || cmd.aliases.includes(command))) return;

    cmd.execute(client, message, args, []); // TODO: Add flag parsing, pass options here.
  });
});

console.clear();
console.log("Starting bot...");

client.login(process.env.TOKEN);
