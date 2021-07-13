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