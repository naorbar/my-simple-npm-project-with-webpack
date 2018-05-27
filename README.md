@Description Use NPM in my Javascript project
@Author barna10
@Date May, 2018

Step 1:
Use "npm init" command will create my initial package.json file in this folder
 
Step 2: 
Install two modules:
npm install --save arithmetic
npm install --save repeat-string
This will update package.json and add folder "node_modules" with the new modules

Step 3:
Create a index.js with some js code based on the packages I've installed... 
e.g.
var repeat = require("repeat-string");
console.log(repeat("hey", 100));
document.write(repeat("hey", 10));

Step 4: 
Run the index.js:

C:\NAOR\my-simple-npm-project>node index.js
C:\NAOR\my-simple-npm-project>node index.js
heyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyhey
C:\NAOR\my-simple-npm-project\index.js:3
document.write(repeat("hey", 10));
^

ReferenceError: document is not defined
    at Object.<anonymous> (C:\NAOR\my-simple-npm-project\index.js:3:1)
    at Module._compile (module.js:652:30)
    at Object.Module._extensions..js (module.js:663:10)
    at Module.load (module.js:565:32)
    at tryModuleLoad (module.js:505:12)
    at Function.Module._load (module.js:497:3)
    at Function.Module.runMain (module.js:693:10)
    at startup (bootstrap_node.js:191:16)
    at bootstrap_node.js:612:3

Step 5: 
Create a sample index.html which uses *index.js* and try to open with a browser:
<h1>Simple Web Page</h1>
<script src="index.js"></script>
As you can see it doesn't work! I need to WEBPACK the nodejs code first!!!!
Console error:
index.js:1 Uncaught ReferenceError: require is not defined

Step 6: 
This step is based on webpack docs: https://webpack.js.org/guides/getting-started/#creating-a-bundle
Use *WEBPACK* to convert my nodejs code with the relevant modules into client side code
need to install webpack first:
npm install --save-dev webpack
If you're using webpack v4 or later, you'll need to install a CLI:
	npm install --save-dev webpack-cli
or
	npm install --save-dev webpack-command

Create webpack.config.js:

const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};

Put the index.js in src folder

Edit the package.json file to be able to run webpack as part of the npm build process:
Add: 
"build": "webpack" 
To the package.json scripts

Step 7: run npm run build
C:\NAOR\my-simple-npm-project-with-webpack>npm run build

> my-simple-npm-project@1.0.0 build C:\NAOR\my-simple-npm-project-with-webpack
> webpack

i ｢webpack｣: Starting Build
i ｢webpack｣: Build Finished

webpack v4.9.1

2b598ba5bf444ac6874d
  size     name  module          status
  108 B    1     ./src/index.js  built

  size     name  asset           status
  1.09 kB  main  bundle.js       emitted

  Δt 485ms (1 module hidden)


configuration
  0:0  warning  The 'mode' option has not been set, webpack will fallback to
                'production' for this value. Set 'mode' option to 'development' or
                'production' to enable defaults for each environment.

‼  1 problem (0 errors, 1 warning)

Note that now, it created a dist folder with the bundle.js file inside!!!!

Step 8: 
Edit the index.html to now use the *bundle.js* and try to open with a browser:
<h1>Simple Web Page</h1>
<script src="./dist/bundle.js"></script>
Now it works!!! 
