type CommandHandler = (args: string[], options: string[]) => void;
type CommandHandlerAsync = (args: string[], options: string[]) => Promise<void>;

export default interface Command {
  name: string;
  aliases: string[];
  type: 'normal' | 'secret' | 'protected';
  execute: CommandHandler | CommandHandlerAsync;
}
