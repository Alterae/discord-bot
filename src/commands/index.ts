import Command from '../types/command';
import debug from './debug';
import info from './info';
import random from './random';

/**
 * The list of all commands.
 */
const commands: Command[] = [...debug, ...info, ...random];

export default commands;
