type CommandHandler = (args: string[], options: string[]) => void;
type CommandHandlerAsync = (args: string[], options: string[]) => Promise<void>;

// TODO: Add JSDoc comments
export default interface Command {
  name: string;
  aliases: string[];
  description: string;
  protection: 'normal' | 'secret' | 'protected';
  execute: CommandHandler | CommandHandlerAsync;
}
