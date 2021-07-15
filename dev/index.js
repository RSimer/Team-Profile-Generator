const inquirer = require("inquirer");
const path = require("path");
// download path done
// OUTPUT_DIR = path.join (output_Dir, team.html); GOOGLE THESE
// outputPath = path.resolve (_dirname, "output")

// all within one giant ass funciton
// put each question within its own funciton
// each section has its own function
// manager section goes to list function
// list funciton goes to engineer or intern funciton
// either calls back to list funciton
// when finished, pushes to the path function

const teamMemebers = [];
const teamGenerator = () => {

function askforManager(){

}






}
const managerQuestions = [
    {
        type: "input",
        message: "what is the manager's name?",
        name: "managerName"
    },
];
const internQuestions = [
    {
        type: "input",
        message: "what is the intern's name?",
        name: "internName",
    },
];
const engineerQuestions = [
    {
        type: "input",
        message: "what is the engineer's name?",
        name: "engineerName",
    },
];

const WhatsNextQuestions = [
    {
        type: "list",
        message: "what is the engineer's name?",
        name: "engineerName",
        choices: ['Engineer','Intern'],
    }
];

const askForInternInfo = () =>{

}
const askWhatNext = () => inquirer
.prompt(managerQuestions)
.then((WhatsNextAnswer) => {



})
inquirer
.prompt(managerQuestions)
.then((answers)=>{

    const manager = new Manager (managerAnswers);

    return askWhatNext();
})
.then(() =>{

})
.catch((error) => {
    if (error.isTtyError){

    } else {

    }
});


// break case for the option list for engineer intern else (default) build team fucntion

// with building the team use if fs.existsSync(output_dir){fs.mkirSync(output_dir)}
// fs.writeFileSync(outputPath, render(teamMemebers(that is an array), utf-8))