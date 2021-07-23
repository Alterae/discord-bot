import Command from '../../types/command';
import about from './about';
import version from './version';

/**
 * The info module.  Contains commands that output information about the bot.
 */
const commands: Command[] = [about, version];

export default commands;
