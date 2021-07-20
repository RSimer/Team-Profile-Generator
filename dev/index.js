const inquirer = require("inquirer");
const path = require("path");

const Employee = require('../lib/employee');
const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern');
const Manager = require('../lib/manager');

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



const managerQuestions = [
    {
        type: "input",
        message: "what is the manager's name?",
        name: "managerName"
    },
    {
        type: "input",
        message: "what is the manager's id?",
        name: "managerId",
    },
    {
        type: "input",
        message: "what is the manager's email?",
        name: "managerEmail"
    },
    {
        type: "input",
        message: "what is your office number",
        name: "officeNumber"
    },
    
    
];
const internQuestions = [
    {
        type: "input",
        message: "what is the intern's name?",
        name: "internName",
    },
    {
        type: "input",
        message: "what is the interns's id?",
        name: "internId",
    },
    {
        type: "input",
        message: "what is the interns's email?",
        name: "internEmail"
    },
    {
        type: "input",
        message: "what is the interns's school?",
        name: "internSchool"
    },

];
const engineerQuestions = [
    {
        type: "input",
        message: "what is the engineer's name?",
        name: "engineerName",
    },
    {
        type: "input",
        message: "what is the engineers's id?",
        name: "engineerId",
    },
    {
        type: "input",
        message: "what is the engineers's email?",
        name: "engineerEmail"
    },
    {
        type: "input",
        message: "what is the engineer's github?",
        name: "engineerGithub"
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


const teamGenerator = () => {

    function askforManager(){
        inquirer.prompt(managerQuestions)
        .then(managerData =>{
            let managerData = {managerName,managerId,managerEmail,officeNumber}
            employee = new Manager(managerName,managerId,managerEmail,officeNumber)
        })
    }
    function WhatsNext(){
        inquirer.prompt(WhatsNextQuestions)
        .then()
    }
}

teamGenerator();
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