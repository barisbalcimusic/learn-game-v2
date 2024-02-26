import readlineSync from "readline-sync";
import { allQuestions } from "./questions.js";
import { exercises } from "./exercises.js";
import { letters } from "./letters.js";
import { cl } from "./colors.js";

process.stdout.write("\x1bc"); // console.clear()-Alternative

//create a sorted list with selected array methods
let methodsList = [];
allQuestions.forEach((question) => methodsList.push(question.name));
methodsList.sort((a, b) => a.localeCompare(b));

//logs
let startText = `${cl.c}---------------------- Welcome! ---------------------- ${cl.rs}
${cl.c}•${cl.rs} Enter ${cl.g}"S"${cl.rs} to start the quiz
${cl.c}•${cl.rs} Enter ${cl.m}"Q"${cl.rs} to quit the application
${cl.c}•${cl.rs} Enter ${cl.b}"L"${cl.rs} to see the list of selected array methods
${cl.c}•${cl.rs} Enter "${cl.y}E${cl.rs}" to start the exercises: `;
let answerText = `${cl.c}Answer ${cl.rs}(${cl.g}Y${cl.rs}es, ${cl.r}N${cl.rs}o, ${cl.y}S${cl.rs}kip, ${cl.b}R${cl.rs}esult): `;
let warningText = `\n${cl.y}That is not a valid shortcut!${cl.rs}`;
let closingText = `\n${cl.m}---------------------- Goodbye! ---------------------- ${cl.rs}`;
let listText = `\n${cl.y}Here is the list of selected array methods:${cl.rs}`;
let methodsText = `${cl.m}You should refresh your knowledge on the following methods:${cl.rs}`;
let goodLuckText = `\n${cl.c}―――――― Good luck! ――――――${cl.rs}`;
let trueText = `${cl.g}--> True!${cl.rs}`;
let falseText = `${cl.r}--> False!${cl.rs}`;
let exFalseText = `${cl.r}--> False!${cl.rs} The answer is:`;
let exerciseText = `${cl.c}Which method should you use in order to get this output? Fill out by typing any letter.${cl.rs}\n${cl.w}(Press ${cl.m}'1'${cl.w} to ${cl.m}go back ${cl.w}to the main menu, ${cl.g}'2'${cl.w} to ${cl.g}check${cl.w} the answer, ${cl.r}space bar${cl.w} to ${cl.r}skip${cl.w} the question)${cl.rs}`;
let nextQuest = `\n${cl.y}Press space bar for the next question${cl.rs}`;

//------------------------------------- GAME -------------------------------------
function game() {
  let trueAns = 0;
  let falseAns = 0;
  let toRef = [];

  let answer = readlineSync.question(startText).toLowerCase();

  switch (answer) {
    //START THE GAME
    case "s":
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

        console.log(`\n${cl.c}Question:${cl.rs} ${question}`);
        answer = readlineSync.question(answerText).toLowerCase();

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
              `\n${cl.b}Result${cl.rs}: You have ${cl.g}${trueAns} true ${cl.rs}answer(s) and ${cl.r}${falseAns} false${cl.rs} answer(s).\n`
            );
            if (toRef.length > 0) {
              console.log(methodsText, `${cl.b}${toRef.join(", ")}${cl.rs}\n`);
            }
            game();
          } else {
            do {
              console.log(warningText);
              console.log(`\n${cl.c}Question:${cl.rs} ${question}${cl.y}`);
              answer = readlineSync.question(answerText).toLowerCase();
            } while (
              answer !== "y" &&
              answer !== "n" &&
              answer !== "r" &&
              answer !== "s"
            );
            answerCheck();
          }
        }
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
      }
      break;

    //SHOW THE LIST
    case "l":
      console.log(listText);
      methodsList.forEach((element) => {
        console.log(`${cl.c}» ${element}()${cl.rs}`);
      });
      console.log();
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

      process.stdout.write("\x1bc");

      process.stdin.setRawMode(true);
      process.stdin.resume();
      process.stdin.setEncoding("utf8");
      process.stdin.on("data", exerciseCheck);

      exercisePrepare();
      function exercisePrepare() {
        ranEx = Math.floor(Math.random() * exercises.length);
        exercise = exercises[ranEx].exercise;
        method = exercises[ranEx].name;
        splittedMethod = method.split("");
        placeholders = splittedMethod.reduce(
          (acc) => `${acc}` + `${cl.r}_${cl.rs}`,
          ""
        );
        exercise = exercise.replace(method, placeholders);
        console.log(exerciseText);
        console.log("\n" + exercise);
      }

      function exerciseCheck(key) {
        //back to main menu by 1
        if (key === "1") {
          console.log(closingText);
          process.exit();
          //check the answer by 2
        } else if (key === "2") {
          isIncluded()
            ? console.log(trueText)
            : console.log(exFalseText, `${cl.g}${method}${cl.rs}`);
          console.log(nextQuest);

          //skip by space bar
        } else if (key === " ") {
          keysEntered = [];
          console.clear();
          exercisePrepare();

          //if a letter entered, replace the placeholder with it
        } else if (letters.includes(key.toUpperCase())) {
          console.clear();
          exercise = exercise.replace("_", `${cl.c}${key}${cl.rs}`);
          console.log(exerciseText);
          console.log("\n" + exercise);
          keysEntered.push(key);
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
      console.log(warningText + "\n");
      game();
  }
}
//run the game
game();

joke();
function joke() {
  fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data.joke));
}
