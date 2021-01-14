/* tslint:disable */
// @ts-nocheck

/* 
  AUTHOR: https://medium.com/better-programming/how-to-secure-angular-environment-variables-for-use-in-github-actions-39c07587d590
  SOURCE: https://gist.githubusercontent.com/richierich25/ba4170ef5bdcc4ea3739bdec3c04e97d/raw/6de52eaca867f7a7a9894085adba7d7290943368/setEnv.ts
*/

const { writeFile, existsSync, mkdirSync } = require('fs');
const { argv } = require('yargs');

require('dotenv').config();
const environment = argv.environment;


function writeFileUsingFS(targetPath, environmentFileContent) {
  writeFile(targetPath, environmentFileContent, function (err) {
    if (err) {
      console.log(err);
    }
    if (environmentFileContent !== '') {
      console.log(`wrote variables to ${targetPath}`);
    }
  });
}


// Providing path to the `environments` directory
const envDirectory = './src/environments';

// creates the `environments` directory if it does not exist
if (!existsSync(envDirectory)) {
  mkdirSync(envDirectory);
}

//creates the `environment.prod.ts` and `environment.ts` file if it does not exist
writeFileUsingFS('./src/environments/environment.prod.ts', '');
writeFileUsingFS('./src/environments/environment.ts', '');


// Checks whether command line argument of `prod` was provided signifying production mode
const isProduction = environment === 'prod';

// choose the correct targetPath based on the environment chosen
const targetPath = isProduction
  ? './src/environments/environment.prod.ts'
  : './src/environments/environment.ts';

//actual content to be compiled dynamically and pasted into respective environment files
const environmentFileContent = `
  // This file was autogenerated by dynamically running setEnv.ts and using dotenv for managing API key secrecy

  export const environment = {
    production: ${isProduction},
    OMDB_API_KEY: '${process.env.OMDB_API_KEY}'
  };
`;

writeFileUsingFS(targetPath, environmentFileContent); // appending data into the target file

/* tslint:enable */