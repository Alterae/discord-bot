import { Client, Message } from 'discord.js';

/**
 * Type representing a command's `execute()` method.
 */
type CommandHandler = (
  client: Client,
  message: Message,
  args: string[],
  options: string[]
) => void;

/**
 * Type representing a command's `execute()` method.
 */
type CommandHandlerAsync = (
  client: Client,
  message: Message,
  args: string[],
  options: string[]
) => Promise<void>;

/**
 * Defines the interface for a command.
 */
export default interface Command {
  /**
   * The name which is used to call the command.
   */
  name: string;
  /**
   * A list of alternate names which may be used to call the command.
   */
  aliases: string[];
  /**
   * A description of the command's functionality.
   */
  description: string;
  /**
   * The protection level of the command.
   * - `'normal'` - any user can use the command, and it will be listed by the help command.
   * - `'secret'` - any user can use the command, but it will not be listed by the help command.
   * - `'protected'` - only the bot author can use the command, and it will not be listed.
   */
  protection: 'normal' | 'secret' | 'protected';
  /**
   * The function called when the command is executed.
   */
  execute: CommandHandler | CommandHandlerAsync;
}
