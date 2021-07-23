# Architecture notes

Assorted thoughts on bot architecture.

## Commands

Commands come in three levels of protection: `'normal'`, `'secret'`, and `'protected'`.

- `'normal'` commands can be used by anyone and are listed by the help command.  Used for general commands.
- `'secret'` commands can be used by anyone, but are not listed by the help command.  Used for easter eggs, maybe some trivial debug tools.
- `'protected'` commands can only be used by the bot author and are not listed by the help command.  Used for debug stuff.

Commands have a name, a description, a list of aliases, a protection level, and an `execute()` method.
