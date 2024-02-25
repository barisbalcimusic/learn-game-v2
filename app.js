import readlineSync from "readline-sync";
import { allQuestions } from "./questions.js";
import { exercises } from "./exercises.js";
import { letters } from "./letters.js";
import { cl } from "./colors.js";

//create a sorted list with selected array methods
let methodsList = [];
allQuestions.forEach((question) => methodsList.push(question.name));
methodsList.sort((a, b) => a.localeCompare(b));

//logs
let startText = `Welcome! To start the game, press ${cl.g}"S"${cl.rs}. To quit, press ${cl.m}"Q"${cl.rs}.To see the list of selected array methods, press ${cl.b}"L"${cl.rs}. For Exercise-Mode, press "${cl.y}E${cl.rs}": `;
let answerText = `Answer ${cl.rs}(${cl.g}Y${cl.rs}es, ${cl.r}N${cl.rs}o, ${cl.y}S${cl.rs}kip, ${cl.b}R${cl.rs}esult): `;
let warningText = `\n${cl.y}That is not a valid shortcut!${cl.rs}`;
let backText = `Press "B" to go back to main menu`;
let closingText = `\n${cl.m}The game has been closed. Goodbye!${cl.rs}\n`;
let listText = `\n${cl.y}Here is the list of selected array methods:${cl.rs}`;
let methodsText = `\n${cl.m}You should refresh your knowledge on the following methods:${cl.rs}`;
let goodLuckText = `${cl.c}―――――― Here are the questions. Good luck! ――――――${cl.rs}`;
let trueText = `\n${cl.g}True!${cl.rs}`;
let falseText = `\n${cl.r}False!${cl.rs} ${cl.w}True answer is:${cl.rs}`;
let exerciseText = `${cl.y}Which method should you use in order to get this output? Fill out by typing any letter. \n(Press ${cl.m}'1'${cl.y} to ${cl.m}go back ${cl.y}to the main menu, ${cl.g}'2'${cl.y} to ${cl.g}check${cl.y} the answer, ${cl.r}space bar${cl.y} to ${cl.r}skip${cl.y} the question)${cl.rs}`;
let nextQuest = `${cl.y}Press space bar for the next question${cl.rs}`;

//-------------------- GAME --------------------
function game() {
  let trueAns = 0;
  let falseAns = 0;
  let toRef = [];

  let answer = readlineSync.question(startText).toLowerCase();

  switch (answer) {
    //START THE GAME
    case "s":
      console.clear();
      console.log(goodLuckText);
      start();
      function start() {
        //create random numbers
        let ranMet = Math.floor(Math.random() * allQuestions.length);
        let ranQue = Math.floor(
          Math.random() * allQuestions[0].questions.length
        );

        //select from object
        let question = allQuestions[ranMet].questions[ranQue].question;
        let correctAnswer = allQuestions[ranMet].questions[ranQue].answer;
        let explanation = allQuestions[ranMet].questions[ranQue].explanation;
        let method = allQuestions[ranMet].name;

        console.log(`\n${cl.y}Question:${cl.rs} ${question}${cl.y}`);
        answer = readlineSync.question(answerText).toLowerCase();

        function trueAnswer() {
          console.log(trueText);
          trueAns++;
          console.log(`${cl.b}--> ${explanation}${cl.rs}`);
          start();
        }

        function falseAnswer() {
          console.log(falseText);
          falseAns++;
          if (!toRef.includes(method)) toRef.push(method);
          console.log(`${cl.b}--> ${explanation}${cl.rs}`);
          start();
        }

        answerCheck();
        function answerCheck() {
          if (answer === "y") {
            answer = "Yes";
            answer === correctAnswer ? trueAnswer() : falseAnswer();
          } else if (answer === "n") {
            answer = "No";
            answer === correctAnswer ? trueAnswer() : falseAnswer();
          } else if (answer === "s") {
            start();
          } else if (answer === "r") {
            console.log(
              `\n${cl.b}Result${cl.rs}: You have ${cl.g}${trueAns} true ${cl.rs}answer(s) and ${cl.r}${falseAns} false${cl.rs} answer(s).`
            );
            console.log(backText);
            if (toRef.length > 0) {
              console.log(methodsText, `${cl.b}${toRef.join(", ")}${cl.rs}`);
            }
            game();
            return;
          } else {
            do {
              console.log(warningText);
              console.log(`\n${cl.y}Question:${cl.rs} ${question}${cl.y}`);
              answer = readlineSync.question(answerText).toLowerCase();
            } while (answer !== "y" && answer !== "n" && answer !== "r");
            answerCheck();
          }
        }
      }
      break;

    //SHOW THE LIST
    case "l":
      console.log(listText);
      methodsList.forEach((element) => {
        console.log(`${cl.c}» ${element}()${cl.rs}`);
      });
      game();
      break;

    //QUIT THE GAME
    case "q":
      console.log(closingText);
      return;

    //EXERCISES
    case "e":
      let ranEx, exercise, method, splittedMethod, placeholders;
      let keysEntered = [];

      process.stdin.setRawMode(true);
      process.stdin.resume();
      process.stdin.setEncoding("utf8");
      process.stdin.on("data", exerciseCheck);

      exercisePrepare();
      function exercisePrepare() {
        console.clear();
        ranEx = Math.floor(Math.random() * exercises.length);
        exercise = exercises[ranEx].exercise;
        method = exercises[ranEx].name;
        splittedMethod = method.split("");
        placeholders = splittedMethod.reduce(
          (acc) => `${acc}` + `${cl.r}_${cl.rs}`,
          ""
        );
        exercise = exercise.replace(method, placeholders);

        console.clear();
        console.log(exerciseText);
        console.log("\n" + exercise);
        console.log(method); // -
      }

      function exerciseCheck(key) {
        //back to main menu by 1
        if (key === "1") {
          process.exit();
          //check the answer by 2
        } else if (key === "2") {
          isIncluded()
            ? console.log(trueText)
            : console.log(falseText, `${cl.g}${method}${cl.rs}`);
          console.log(nextQuest);

          //skip by space bar
        } else if (key === " ") {
          keysEntered = [];
          exercisePrepare();

          //if a letter entered, replace the placeholder with it
        } else if (letters.includes(key.toUpperCase())) {
          console.clear();
          exercise = exercise.replace("_", `${cl.c}${key}${cl.rs}`);
          console.log(exerciseText);
          console.log("\n" + exercise);
          keysEntered.push(key);

          console.log(keysEntered); //-
          console.log(method); //-
        }
      }

      function isIncluded() {
        for (let i = 0; i < method.length; i++) {
          if (method[i] !== keysEntered[i]) {
            return false;
          }
        }
        return true;
      }
      break;

    //SHOW A WARNING (if the entered shortcut is invalid)
    default:
      console.log(warningText);
      game();
  }
}
//run the game
game();
