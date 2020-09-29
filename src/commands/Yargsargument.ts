import { SayHello } from "./SingleParameter"
import yargs = require('yargs');
import { Arguments, Argv } from "yargs";

export function Yargsargument(yargs: Argv): void {
    // create a new yargs "command"
    yargs.command(
        // name the command with no spaces
        "input",

        // describe the command so that the --help flag is helpful
        "Command for hello",

        // You can use test as an argument or the alias "argument"
        {
            test: {
                type: "boolean",
                alias: "argument",
                description: "Display previous clients lumber requirements",
            },
        },
        // define the function we want to run once the arguments are parsed
        function (
            args: Arguments<{
                test: boolean;
                alias: boolean;
            }>
        ) {
            const testscript = SayHello(args.test);
            console.log(testscript);
        }
    );
}

yargs.help();
yargs.parse();