dotenv-es6
==========

This repo contains different branches. Each branch shows an alternative to loading env variables using dotenv. Not all branches have a working version, and that's done on purpose.

Please checkout each branch and refer to the README.md for details.

To run each app, use `npm start`

## branch: import-dotenv-then-config
This branch uses babel-node to execute ES6 code. It tries to load .env by first importing dotenv, and then using `dotenv.config()`

This app works in an unexpected way. Here's the output:

```
richardkaufman @ kaufman in ~/D/h/c/dotenv-es6 import-dotenv-then-config
↪ npm start

> dotenv-es6@0.0.0 start /Users/richardkaufman/Dropbox/home/code/dotenv-es6
> babel-node index.js

A message has been left for you:
undefined
```
We would expect to see `hello world!` instead of `undefined`. The reason why the message is undefined is because of how ES6 loads modules.

When a file is loaded, the first thing node does is to fulfill all the `import` calls. It doesn't matter if your imports and placed at the end of the file, or at the beginning, node will load these modules before doing anything else. Node will also load them in the other they appear. Furthermore, it will execute modules using depth-first traversal.

Here's a quote from [Mozilla's Blog – ES6 in Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/):
> When you run a module containing an import declaration, the modules it imports are loaded first, then each module body is executed in a depth-first traversal of the dependency graph, avoiding cycles by skipping anything already executed.

What's happening in this app is the following:

 1. dotenv executed and imported
 2. log is executed and imported
 3. dotenv.config()
 4. log()

So, `log` is imported before the `.env` variables are loaded by `dotenv`. Since at the moment `log` is imported `MESSAGE` hasn't been loaded, the output from that function includes a line with `undefined`.