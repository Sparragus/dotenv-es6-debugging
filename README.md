dotenv-es6
==========

This repo contains different branches. Each branch shows an alternative to loading env variables using dotenv. Not all branches have a working version, and that's done for debuggin purposes.

Please checkout each branch and refer to the README.md for details.

To run each app, use `npm start`

## branch: dotenv-preload
This branch uses babel-node to execute ES6 code. It also tries to preload dotenv using the `-r node_modules/dotenv/config` option. 

The expected result of our app should be:

```
A message has been left for you:
hello world!
```

However, when `npm start` is run, nothing is output to stdout.
```
richardkaufman @ kaufman in ~/D/h/c/dotenv-es6 preload-dotenv
↪ npm start

> dotenv-es6@0.0.0 start /Users/richardkaufman/Dropbox/home/code/dotenv-es6
> babel-node -r node_modules/dotenv/config index.js

richardkaufman @ kaufman in ~/D/h/c/dotenv-es6 preload-dotenv
↪ 

```

### Sidenote

Notice that when we are preloading `dotenv/config` with the option `-r node_modules/dotenv/config`. If we instead don't prepend `node_modules/` (i.e. simply use `-r dotenv/config`), the following error is output:

```
richardkaufman @ kaufman in ~/D/h/c/dotenv-es6 preload-dotenv
↪ npm start

> dotenv-es6@0.0.0 start /Users/richardkaufman/Dropbox/home/code/dotenv-es6
> babel-node -r dotenv/config index.js

module.js:334
    throw err;
          ^
Error: Cannot find module '/Users/richardkaufman/Dropbox/home/code/dotenv-es6/dotenv/config'
    at Function.Module._resolveFilename (module.js:332:15)
    at Function.Module._load (module.js:282:25)
    at Function.Module.runMain (module.js:467:10)
    at Object.<anonymous> (/Users/richardkaufman/.nvm/versions/io.js/v2.2.1/lib/node_modules/babel/lib/_babel-node.js:144:25)
    at Module._compile (module.js:426:26)
    at Object.Module._extensions..js (module.js:444:10)
    at Module.load (module.js:351:32)
    at Function.Module._load (module.js:306:12)
    at Function.Module.runMain (module.js:467:10)
    at startup (node.js:117:18)

npm ERR! Darwin 14.4.0
npm ERR! argv "/Users/richardkaufman/.nvm/versions/io.js/v2.2.1/bin/iojs" "/Users/richardkaufman/.nvm/versions/io.js/v2.2.1/bin/npm" "start"
npm ERR! node v2.2.1
npm ERR! npm  v2.11.0
npm ERR! code ELIFECYCLE
npm ERR! dotenv-es6@0.0.0 start: `babel-node -r dotenv/config index.js`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the dotenv-es6@0.0.0 start script 'babel-node -r dotenv/config index.js'.
npm ERR! This is most likely a problem with the dotenv-es6 package,
npm ERR! not with npm itself.
npm ERR! Tell the author that this fails on your system:
npm ERR!     babel-node -r dotenv/config index.js
npm ERR! You can get their info via:
npm ERR!     npm owner ls dotenv-es6
npm ERR! There is likely additional logging output above.

npm ERR! Please include the following file with any support request:
npm ERR!     /Users/richardkaufman/Dropbox/home/code/dotenv-es6/npm-debug.log
```
