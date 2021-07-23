import Command from '../types/command';
import debug from './debug';
import info from './info';

/**
 * The list of all commands.
 */
const commands: Command[] = [...debug, ...info];

export default commands;
