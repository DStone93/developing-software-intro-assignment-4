# Focus College ACSD Assignment 4

This respository is intended for the use of Focus College Students enrolled in the Advanced Certificate of Software Development located in Kelowna, BC and Surrey, BC.

---
# Step 2. Make Your Package a TypeScript Project
Following the requirements for step 2 as shown below I have done the follow:
* Created the new branch "feature/typescript" in the master branch and checked it out.
*  Install typescript for the project using:
```
npm install -D typescript@3.3.3
---
npm install -g typescript@latest
```

*  Added NPM scripts:
```
start": "node dist/index.js",
"build": "npm run build",
"build:compile": "tsc"
```
* Updated Readme.md 
    + See this file

*  Updated verson to 1.1.0 from 1.0.0

## Step 2 Requirements:

*  Checkout your master branch and pull the newest version from your remote repository
*  Create a new branch called "feature/typescript" and checkout this branch
* Setup your package for TypeScript
*  Add NPM scripts so that you can, in one cli command each:
    *  compile
    *  start
    *   compile & start
*  Update the readme.md
*  Version your package
*  Commit your changes
*  Push your feature branch to your remote repository
*  Merge your feature branch into master using a Pull Request on Github

---
# Step 3:
* Cloned master from my repository
* Created the new branch "feature/lint
* Checked out "feature/lint"
* Added ESlint:
```
 npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
---
touch .eslintrc
---
touch .eslintignore
```
* Modify NPM Scripts:
    +  "start:dev": "npm run start",
    +  "lint": "eslint . --ext .ts"
    +  "start:dev:lint": "npm run build:compile && npm run start && npm run lint"
*  Updated version from 1.1.0 to 1.2.0



## Step 3 Requirements:
*  Checkout your master branch and pull the newest version from your remote repository
*  Create a new branch called "feature/lint" and checkout this branch
*  Add ESLint to your project
*  Modify your NPM scripts so that you can, in one cli command each:
   +  compile
   +  start
   +  lint
   +  compile & run
   +  lint, compile & run
*  Update the readme.md
*  Version your package
*  Commit your changes
*  Push your feature branch to your remote repository
*  Merge your feature branch into master using a Pull Request on Github
---

# Step 4:
* Cloned master from my respository
* Created a new branch "feature/format"
* Checked out branch "feature/format"
* Install Prettier & add echo for prettier
``` 
npm install --save-dev --save-exact prettier
---
echo {}> .prettierrc.json
---
Added .prettierignore
```

* Modified package.json to:
  +   "build:compile": "tsc",
  +  "start": "node dist/index.js",
  +  "lint": "eslint . --ext .ts",
  +  "build:prettier": "prettier --write src/**/*.ts",
  +  "start:dev": "npm run start",
  +  "start:dev:lint": "npm run build:compile && npm run start && npm run lint",
  +  "build": "npm run lint && npm run build:prettier && npm run start && npm run build:compile"

* Update version to 1.3.0


## Step 4 Requirements:
*  Checkout your master branch and pull the newest version from your remote repository
*  Create a new branch called "feature/format" and checkout this branch
*  Add Prettier to your project
*  Modify your NPM scripts so that you can, in one cli command each:
   +  compile
   +  start
   +  lint
   +  format
   +  compile & run
   +  lint, format, compile & run
*  Update the readme.md
*  Version your package
*  Commit your changes
*  Push your feature branch to your remote repository
*  Merge your feature branch into master using a Pull Request on Github
---
# Step 5
* Cloned master from my respository
* Created a new branch "feature/testing"
* Install Mocha & chai
```
npm install chai mocha ts-node @types/chai @types/mocha --save-dev
```
*  Modified package.json to:

    +  "lint": "eslint . --ext .ts",
    +  "start": "node dist/index.js",
    +  "start:dev": "npm run start",
    +  "start:dev:lint": "npm run build:compile && npm run start && npm run lint",
    +  "start:dev:notest": "npm run build:compile && npm run start",
    +  "build": "npm run lint && npm run build:prettier && npm run test  && npm run start && npm run build:compile",
    +  "build:prettier": "prettier --write src/**/*.ts",
    +  "build:compile": "tsc",
    +  "test": "mocha -r ts-node/register tests/**/*.spec.ts"

*  A few of these could now be erased**

*  Update version to 1.4.0

## Step 5 Requirements:
*  Checkout your master branch and pull the newest version from your remote repository
*  Create a new branch called "feature/testing" and checkout this branch
*  Add Mocha & Chai to your project
*  Modify your NPM scripts so that you can, in one cli command each:
   +  compile
   +  start
   +  lint
   +  format
   +  test
   +  compile & run
   +  lint, format, test, compile & run
*  Update the readme.md
*  Version your package
*  Commit your changes
*  Push your feature branch to your remote repository
*  Merge your feature branch into master using a Pull Request on Github

---
# Step 6:
* Cloned master from my respository
* Created a new branch "feature/istanbul"
* Checked out feature/istanbul
* Installed:
```
npm i -D nyc
---
npm install @istanbuljs/nyc-config-typescript
```
*  Created .nycrc.json
   +   Added:
```
   {
    "extends": "@istanbuljs/nyc-config-typescript",
    "all": true,
    "check-coverage": true,
    "reporter": ["text","html"]
  }
```

Modified package.json to:
"lint": "eslint . --ext .ts",
* "start": "node dist/index.js",
* "start:dev": "npm run start",
* "start:dev:lint": "npm run build:compile && npm run start && npm run lint",
* "start:dev:notest": "npm run build:compile && npm run start",
* "build": "npm run lint && npm run build:prettier && npm run test && npm run start && npm run build:compile",
* "build:prettier": "prettier --write src/**/*.ts",
* "build:compile": "tsc",
* "test": "nyc mocha -r ts-node/register tests/**/*.spec.ts"

Added coverage to all of the ignore files.
* Updated version to 1.5.0
## Step 6 Requirements:
Checkout your master branch and pull the newest version from your remote repository
Create a new branch called "feature/istanbul" and checkout this branch
Add nyc to your project
Modify your NPM scripts so that you can, in one cli command each:
compile
start
lint
format
test
test with coverage
compile & run
lint, format, test, compile & run
Update the readme.md
Version your package
Commit your changes
Push your feature branch to your remote repository
Merge your feature branch into master using a Pull Request on Github

# Step 7:
* Cloned master from my respository
* Created a new branch "feature/yargs"
* Checked out feature/yargs
* Installed the stable version of yargs:
```
npm i yargs
npm i @types/yargs --save-dev
```
To test the new command use:
```
npm start --input --test
```
*  Updated version to 1.6.0

## Step 7 Requirements:
*  Checkout your master branch and pull the newest version from your remote repository
*  Create a new branch called "feature/yargs" and checkout this branch
*  Add yargs to your project
*  Setup yargs to accept a single parameter, and have your program console.log "Hello" and the value of the parameter.
*  Update the readme.md
*  Version your package
*  Commit your changes
*  Push your feature branch to your remote repository
*  Merge your feature branch into master using a Pull Request on Github

# Step 8:
* Cloned from my master branch
* Created new branch feature/module
* Checked out feature/module
* Npm install
* Turns out I made step 7 into a module..
* Updated version to 1.7.0

## Step 8 requirements:
* Checkout your master branch and pull the newest version from your remote repository
* Create a new branch called "feature/module" and checkout this branch
* Create a module with a single function that will console.log * "Hello" to the value of a parameter.
* Incorporate the module into the file handling yargs
* Write a test to validate that your function works as intended
* Update the readme.md
* Version your package
* Commit your changes
* Push your feature branch to your remote repository
* Merge your feature branch into master using a Pull Request on Github