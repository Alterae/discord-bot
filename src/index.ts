import "colors";
import * as Discord from "discord.js";
import * as dotenv from "dotenv";
import commands from "./commands";

const prefix = "!"; // TODO: Make prompt non-hardcoded

// Load environment variables
dotenv.config();

// Initialize a new Discord client
const client = new Discord.Client();

// Once the client is ready, set its status and activity to something useful
client.once("ready", () => {
  client.user.setPresence({
    activity: { name: `${prefix}help`, type: "LISTENING" },
    status: "online",
  });
  console.log("Bot started!".green.bold);
});

// Command handling.  Runs when the client recieves a message
client.on("message", (message) => {
  // Ignore messages that don't start with the prefix, or are sent by bots
  if (!message.content.startsWith(prefix) || message.author.bot) {
    return;
  }

  // TODO: Improve parsing logic to support multi-word (quoted) args, flags
  // At present, just removes the prefix, splits at whitespace, and shifts the
  // command to its own variable
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  // If we reach this point, iterate through all commands.  If the name or alias
  // of a command matches, run it
  commands.forEach((cmd) => {
    if (!(cmd.name === command || cmd.aliases.includes(command))) return;

    cmd.execute(client, message, args, []); // TODO: Add flag parsing, pass options here.
  });
});

console.clear();
console.log("Starting bot...");

// Log in using the token loaded from the .env file
client.login(process.env.TOKEN);
