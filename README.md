dotenv-es6
==========

This repo contains different branches. Each branch shows an alternative to loading env variables using dotenv. Not all branches have a working version, and that's done on purpose.

Please checkout each branch and refer to the README.md for details.

To run each app, use `npm start`

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
