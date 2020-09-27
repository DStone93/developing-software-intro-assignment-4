# Focus College ACSD Assignment 4

This respository is intended for the use of Focus College Students enrolled in the Advanced Certificate of Software Development located in Kelowna, BC and Surrey, BC.

---
# Step 2. Make Your Package a TypeScript Project
Following the requirements for step 2 as shown below I have done the follow:
* Created the new branch "feature/typescript" in the master branch and checked it out.
*  Install typescript for the project using:
```
npm install -D typescript@3.3.3
followed by:
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
    +  npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
    +  touch .eslintrc
    +  touch .eslintignore
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