
import inquirer from "inquirer";
import chalk from "chalk";

let randomNumber = Math.floor(Math.random() * 6  + 1);
// console.log(randomNumber);

const guessing= await inquirer.prompt({
  name:"guess", type:"number", message:"Guess a number between 1-6 "
})

    if (randomNumber === guessing.guess) {
      console.log(chalk.green(`Congratulations! You guessed the number ${guessing.guess} correctly`));
    } else if (guessing.guess > randomNumber ) {
      console.log(chalk.yellow("Too high! Try again"));
    } else if (guessing.guess < randomNumber ) {
      console.log(chalk.blue("Too low! Try again"));
    }




