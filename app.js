import readlineSync from "readline-sync";
import { questionsObj } from "./modules/questions.js";
import { exercises } from "./modules/exercises.js";
import { letters } from "./modules/letters.js";
import { cl } from "./modules/colors.js";

// console.clear()-Alternative
process.stdout.write("\x1bc");

//create a sorted list with selected array methods
const methodsList = [];
questionsObj.forEach((question) => methodsList.push(question.name));
methodsList.sort((a, b) => a.localeCompare(b));

//logs
const startLog = `${cl.c}---------------------- Welcome! ---------------------- ${cl.rs}
${cl.c}-${cl.rs} Enter ${cl.g}"S"${cl.rs} to start the quiz
${cl.c}-${cl.rs} Enter ${cl.b}"L"${cl.rs} to see the list of selected array methods
${cl.c}-${cl.rs} Enter "${cl.y}E${cl.rs}" to start the exercises
${cl.c}-${cl.rs} Enter ${cl.m}"Q"${cl.rs} to quit the application: `;
const questionLog = `\n${cl.c}Question:${cl.rs}`;
const answerLog = `${cl.c}Answer ${cl.rs}(${cl.g}Y${cl.rs}es, ${cl.r}N${cl.rs}o, ${cl.y}S${cl.rs}kip, ${cl.b}R${cl.rs}esult): `;
const warningLog = `\n${cl.y}That is not a valid shortcut!${cl.rs}`;
const closingLog = `\n${cl.m}---------------------- Goodbye! ---------------------- ${cl.rs}`;
const listLog = `\n${cl.y}Here is the list of selected array methods:${cl.rs}`;
const methodsLog = `${cl.m}You should refresh your knowledge on the following methods:${cl.rs}`;
const goodLuckLog = `\n${cl.c}―――――― Good luck! ――――――${cl.rs}`;
const trueLog = `${cl.g}--> True!${cl.rs}`;
const qzFalseLog = `${cl.r}--> False!${cl.rs}`;
const excFalseLog = `${cl.r}--> False!${cl.rs} The answer is:`;
const excLog = `${cl.c}Which method should you use in order to get this output? Fill out by typing any letter.${cl.rs}\n${cl.w}(Press ${cl.m}'1'${cl.w} to ${cl.m}go back ${cl.w}to the main menu, ${cl.g}'2'${cl.w} to ${cl.g}check${cl.w} the answer, ${cl.r}space bar${cl.w} to ${cl.r}skip${cl.w} the question)${cl.rs}`;
const nextExcLog = `\n${cl.y}Press space bar for the next question${cl.rs}`;
const jokeLog = `${cl.g}Smile!:${cl.rs}`;

//get random joke via API
async function fetchData() {
  try {
    const response = await fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch failed:", error);
    return null;
  }
}

//------------------------------------- APP -------------------------------------

//run the app
runApp();

function runApp() {
  //some initial values
  let trueAns = 0;
  let falseAns = 0;
  let metToRef = [];
  let myJoke;

  //get the prompt
  let answer = readlineSync.question(startLog).toLowerCase();

  switch (answer) {
    //START THE APP
    case "s":
      console.log(goodLuckLog);

      startQuiz();
      function startQuiz() {
        //create random numbers
        let r1 = Math.floor(Math.random() * questionsObj.length);
        let r2 = Math.floor(Math.random() * questionsObj[0].questions.length);

        //select from object
        let question = questionsObj[r1].questions[r2].question;
        let correctAnswer = questionsObj[r1].questions[r2].answer;
        let explanation = questionsObj[r1].questions[r2].explanation;
        let method = questionsObj[r1].name;

        //get the prompt
        console.log(questionLog, question);
        answer = readlineSync.question(answerLog).toLowerCase();

        answerCheck();
        function answerCheck() {
          if (answer === "y") {
            answer = "Yes";
            answer === correctAnswer ? trueAnswer() : falseAnswer();
          } else if (answer === "n") {
            answer = "No";
            answer === correctAnswer ? trueAnswer() : falseAnswer();

            //skip the question
          } else if (answer === "s") {
            startQuiz();

            //show the result
          } else if (answer === "r") {
            console.log(
              `\n${cl.b}Result${cl.rs}: You have ${cl.g}${trueAns} true ${cl.rs}answer(s) and ${cl.r}${falseAns} false${cl.rs} answer(s).\n`
            );

            //show the methods to refresh, if there is any
            if (metToRef.length > 0)
              console.log(
                methodsLog,
                `${cl.b}${metToRef.join(", ")}${cl.rs}\n`
              );

            //start the app again
            runApp();

            //if the entry is invalid
          } else {
            do {
              console.log(warningLog);

              //prompt the answer
              console.log(questionLog, question);
              answer = readlineSync.question(answerLog).toLowerCase();
            } while (
              answer !== "y" &&
              answer !== "n" &&
              answer !== "r" &&
              answer !== "s"
            );

            //start the check again, if the entry is valid
            answerCheck();
          }
        }

        //what to do if the answer is true
        function trueAnswer() {
          console.log(trueLog);
          trueAns++;
          console.log(`${cl.b}--> ${explanation}${cl.rs}`);
          startQuiz();
        }

        //what to do if the answer is false
        async function falseAnswer() {
          console.log(qzFalseLog);
          falseAns++;
          if (!metToRef.includes(method)) metToRef.push(method);
          console.log(`${cl.b}--> ${explanation}${cl.rs}`);
          myJoke = await fetchData();
          console.log(jokeLog, myJoke.joke, ":)");
          startQuiz();
        }
      }
      break;

    //SHOW THE LIST
    case "l":
      console.log(listLog);
      methodsList.forEach((element) => {
        console.log(`${cl.c}» ${element}()${cl.rs}`);
      });
      console.log();
      runApp();
      break;

    //QUIT THE GAME
    case "q":
      console.log(closingLog);
      return;

    //EXERCISES
    case "e":
      let r3, exercise, method, splittedMethod, placeholders;
      let keysEntered = [];

      process.stdout.write("\x1bc");

      //settings
      process.stdin.setRawMode(true);
      process.stdin.resume();
      process.stdin.setEncoding("utf8");

      process.stdin.on("data", exerciseCheck);

      exercisePrepare();
      function exercisePrepare() {
        r3 = Math.floor(Math.random() * exercises.length);
        exercise = exercises[r3].exercise;
        method = exercises[r3].name;
        splittedMethod = method.split("");

        //create a variable that has placeholders equal to the number of letters in method
        placeholders = splittedMethod.reduce(
          (acc) => `${acc}` + `${cl.r}_${cl.rs}`,
          ""
        );

        //replace the method with placeholders
        exercise = exercise.replace(method, placeholders);
        console.log(excLog);
        console.log("\n" + exercise);
      }

      function exerciseCheck(key) {
        //back to main menu
        if (key === "1") {
          console.log(closingLog);
          process.exit();

          //check the answer
        } else if (key === "2") {
          isIncluded()
            ? console.log(trueLog)
            : console.log(excFalseLog, `${cl.g}${method}${cl.rs}`);
          console.log(nextExcLog);

          //skip the question/new question
        } else if (key === " ") {
          keysEntered = [];
          console.clear();
          exercisePrepare();

          //if a letter entered, replace the placeholder with the letter
        } else if (letters.includes(key.toUpperCase())) {
          console.clear();
          exercise = exercise.replace("_", `${cl.c}${key}${cl.rs}`);
          console.log(excLog);
          console.log("\n" + exercise);
          keysEntered.push(key);
        }
      }

      //check if each letter matches with ones of the method
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
      console.log(warningLog + "\n");
      runApp();
  }
}
