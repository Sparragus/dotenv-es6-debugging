dotenv-es6
==========

This repo contains different branches. Each branch shows an alternative to loading env variables using dotenv. Not all branches have a working version, and that's done on purpose.

Please checkout each branch and refer to the README.md for details.

To run each app, use `npm start`

All examples are executed using `babel-node@5.8.23`, `dotenv@1.2.0`, and `iojs@2.2.1`.

## branch: master
This branch uses babel-node to execute ES6 code. It loads .env by importing `dotenv/config`.

This app works. Output:

```
richardkaufman @ kaufman in ~/D/h/c/dotenv-es6 master
↪ npm start

> dotenv-es6@0.0.0 start /Users/richardkaufman/Dropbox/home/code/dotenv-es6
> babel-node index.js

A message has been left for you:
hello world!
```

Why and how does this version work? The first line in our code is: `import {} from 'dotenv/config'` This is pretty much a hack to make dotenv work as expected. When `node` imports the module, our module gets executed. If we take a look at the code for `dotenv/config` we see a self-executing anonymous function. So, in the process of importing it, it gets executed and our env vars get loaded.

Please read about more importing modules in the branch `import-dotenv-then-config`
