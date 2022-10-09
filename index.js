const inquirer = require("inquirer");
const { createFile } = require("./src/generatePage.js");
const fs = require("fs");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
employeeArray = [];

const managerPrompts = [
  {
    type: 'input',
    name: 'name',
    message: 'What is the name of your manager?',
    validate: managerName => {
      if (managerName) {
        return true;

      } else {
        console.log("Make sure to enter your manager's name.");
        return false;
      }
    }
  },
  {
    type: 'number',
    name: 'id',
    message: 'Could you please enter the ID number of your manager?',
    validate: managerId => {
      if (managerId) {
        return true;
    
      } else {
        console.log("Make sure to enter the ID number of your manager.");
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'email',
    message: 'Could you please enter the email address of your manager?',
    validate: managerEmail => {
      if (managerEmail) {
        return true;
    
      } else {
        console.log("Make sure to enter the email address of your manager.");
        return false;
      }
    }
  },
  {
    type: 'number',
    name: 'officeNumber',
    message: 'Could you please enter the office number of your manager?',
    validate: officeNumber => {
      if (officeNumber) {
        return true;
    
      } else {
        console.log("Make sure to enter the office number of your manager.");
        return false;
      }
    }
  },
]

const employeePrompt = [
  {
    type: 'list',
    name: 'addNewEmployee',
    message: 'Do you want to add an Engineer or Intern to your team?',
    choices: [
      "Yes, add an Engineer to my team.",
      "Yes, add an Intern to my team.",
      "No, my team is complete."
    ]
  }
]

const engineerPrompts = [
  {
    type: 'input',
    name: 'name',
    message: 'What is the name of this engineer?',
    validate: engineerName => {
      if (engineerName) {
        return true;
    
      } else {
        console.log("Make sure to enter the name of this engineer.");
        return false;
      }
    }
  },
  {
    type: 'number',
    name: 'id',
    message: 'Could you please enter the ID number of this engineer?',
    validate: engineerId => {
      if (engineerId) {
        return true;
    
      } else {
        console.log("Make sure to enter the ID number of this engineer.");
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'email',
    message: 'Could you please enter the email address of this engineer?',
    validate: engineerEmail => {
      if (engineerEmail) {
        return true;
    
      } else {
        console.log("Make sure to enter the email address of this engineer.");
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'github',
    message: 'Could you please enter the GitHub username of this engineer?',
    validate: engineerGit => {
      if (engineerGit) {
        return true;
    
      } else {
        console.log("Make sure to enter the GitHub username of this engineer.");
        return false;
      }
    }
  },
]

const internPrompts = [
  {
    type: 'input',
    name: 'name',
    message: 'What is the name of this intern?',
    validate: internName => {
      if (internName) {
        return true;
    
      } else {
        console.log("Make sure to enter the name of this intern.");
        return false;
      }
    }
  },
  {
    type: 'number',
    name: 'id',
    message: 'Could you please enter the ID number of this intern?',
    validate: internId => {
      if (internId) {
        return true;
    
      } else {
        console.log("Make sure to enter the ID number of this intern.");
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'email',
    message: 'Could you please enter the email address of this intern?',
    validate: internEmail => {
      if (internEmail) {
        return true;
    
      } else {
        console.log("Make sure to enter the email address of this intern.");
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'school',
    message: 'Could you please enter the school name that this intern attended?',
    validate: internSchool => {
      if (internSchool) {
        return true;
    
      } else {
        console.log("Make sure to enter the school name that this intern attended.");
        return false;
      }
    }
  },
]

const addManager = async() => {
  const managerOutcome = await inquirer.prompt(managerPrompts)
  
  const newManager = new Manager(
    managerOutcome.name,
    managerOutcome.id,
    managerOutcome.email,
    managerOutcome.officeNumber
  );

  employeeArray.push(newManager);
  addNewEmployee();
};

const addNewEmployee = async() => {
  const employeeOutcome = await inquirer.prompt(employeePrompt)
  
  .then(function(employeeOutcome) {
    switch (employeeOutcome.addNewEmployee) {
      case "Yes, add an Engineer to my team.":
        addEngineer();
        break;
      
      case "Yes, add an Intern to my team.":
        addIntern();
        break;
        
      case "No, my team is complete.":
        createFile(employeeArray);
        break; 
    }
  })
}

const addEngineer = async() => {
  const engineerOutcome = await inquirer.prompt(engineerPrompts)

  const newEngineer = new Engineer(
    engineerOutcome.name,
    engineerOutcome.id,
    engineerOutcome.email,
    engineerOutcome.github
  );

  employeeArray.push(newEngineer);
  addNewEmployee();
}

const addIntern = async() => {
  const internOutcome = await inquirer.prompt(internPrompts)

  const newIntern = new Intern(
    internOutcome.name,
    internOutcome.id,
    internOutcome.email,
    internOutcome.school
  )

  employeeArray.push(newIntern)
  addNewEmployee();
}

addManager();