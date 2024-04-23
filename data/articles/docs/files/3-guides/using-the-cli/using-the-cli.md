# Interacting with ues.io via the command line

## Download the CLI

Uesio's CLI is distributed as a platform-specific binary executable.

The latest Uesio CLI release binaries, and release notes, can be found at [the uesio Github repo releases area](https://github.com/ues-io/uesio/releases).

Click here to download the ues.io CLI for your operating system and architecture:

-   [Linux](https://github.com/ues-io/uesio/releases/download/v0.5.8/uesio-linux)
-   [Mac OS (Intel)](https://github.com/ues-io/uesio/releases/download/v0.5.8/uesio-macos-amd64)
-   [Mac OS (M1+)](https://github.com/ues-io/uesio/releases/download/v0.5.8/uesio-macos-arm64)
-   [Windows](https://github.com/ues-io/uesio/releases/download/v0.5.8/uesio.exe)

Next, make the binary executable, and move it into your PATH, so that you can use it from any directory:

#### Mac OS

```
chmod +x ~/Downloads/uesio-macos-arm64
sudo mv ~/Downloads/uesio-macos-arm64 /usr/local/bin/uesio
```

(and make sure /usr/local/bin is in your PATH)

**NOTE**: You will be blocked from running the CLI until you trust the app, by going to **System Preferences > Security & Privacy**, and then under "Allow apps from", indicate that you want to allow "uesio" to be run. The next time you try to run `uesio` commands, it should succeed.

### Testing the CLI

You should now be able to run the CLI from any directory. Try running `uesio help` to see a list of available commands:

```
The Uesio CLI

Usage:
  uesio [command]

Available Commands:
  app         All app-related commands
  bundle      Manage app bundles
  completion  Generate the autocompletion script for the specified shell
  deploy      uesio deploy
  generate    Create new metadata using a guided wizard
  help        Help about any command
  login       uesio login
  logout      uesio logout
  pack        uesio pack
  retrieve    uesio retrieve
  sethost     uesio sethost
  site        All site related commands
  siteadmin   Set the name of the context site
  status      uesio status
  upsert      uesio upsert
  work        uesio work
  workspace   All workspace related commands

Flags:
  -h, --help   help for uesio

Use "uesio [command] --help" for more information about a command.
```

## Logging in to the Studio

Once you've downloaded and trusted the CLI, you should be able to login to the Studio with `uesio login`

You should be prompted to enter your username and password, and then should see a message indicating you successfully logged in.

```
> uesio login
Username: luigi
Password: ***********
Successfully logged in as user: Luigi Vampa (uesio/studio.standard)
```
