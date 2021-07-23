# discord-bot

Just another discord bot. Have fun.

## Getting Started

Clone the repository, `cd` into it, and install dependencies:

```console
npm install
# Or pnpm install, yarn, etc.
```

Create a `.env` file in the project root, and put your bot token and user id in it:

```ini
TOKEN=YOUR_TOKEN_HERE
AUTHOR_ID=YOUR_USER_ID_HERE
```

> ⚠ **Warning:** DO NOT COMMIT THE `.env` FILE OR ANYTHING CONTAINING YOUR TOKEN TO VERSION CONTROL.

Then, compile and run the bot:

```console
npm start
```

See the [architecture notes](./architecture-notes.md) for some details on how everything works.

## Features

### Commands

- `stop` - stops the bot (only usable by the owner of the bot)

### Other

- Object-based command system supporting aliases and taking full advantage of typescript's type system.

## Planned Features

### Commands

- `version` - show the package version of the bot
- `about` - show info about the bot (name, version, GitHub repo, description, etc.)
- `help` - help command, self-explanatory
- `poll` - a poll command, because we don't have enough of those
- `roll` - roll dice using dice notation
- `flip` - flip a coin
- maybe a command to view GitHub repos?
- More to come!

### Other

- Command parser supporting quoted arguments and (rudimentary) flags (like most command-line apps).
- Output using embeds.
- An option (maybe via a `--no-embed` flag) to fall back to regular text instead of using embeds.
- A shiny GitHub Pages site.
- More to come!
