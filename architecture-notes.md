# Architecture notes

Assorted thoughts on bot architecture.

## Commands

Commands come in three levels of protection: `'normal'`, `'secret'`, and `'protected'`.

- `'normal'` commands can be used by anyone and are listed by the help command. Used for general commands.
- `'secret'` commands can be used by anyone, but are not listed by the help command. Used for easter eggs, maybe some trivial debug tools.
- `'protected'` commands can only be used by the bot author and are not listed by the help command. Used for debug stuff.

Commands have a name, a description, a list of aliases, a protection level, and an `execute()` method.

The command loading process goes something like this:

- `index.ts` imports `commands`
- `commands` imports each of the command modules (subfolders of the commands directory, each of which exports an array of commands), concatenates their command lists, and exports the whole array.
- each module imports all of the commands in its folder and re-exports them as an array.

To add a new command, place it in a module, and then edit the module's `index.ts` to import and re-export it.

To add a new _module_, create a new subfolder of the commands directory, and then add code which exports an array of commands (see the existing modules for reference).

## Problems

The current architecture has some significant issues:

- The `help` command is currently built directly into the command handler as a special function, instead of being implemented as a regular command.
- There is, at present, no good way to share data between parts of the bot.
