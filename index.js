const inquirer = require("inquirer");
const { createFile } = require("./src/generatePage.js");
const fs = require("fs");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require(".lib/Intern");
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
        console.log("Make sure to enter your manager's name.")
        return false;
      }
    }
  },
  {
    type: 'number',
    name: 'id',
    message: 'Could you please enter the ID of your manager?',
    validate: managerId => {
      if (managerId) {
        return true;
    
      } else {
        console.log("Make sure to enter the ID of your manager.")
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
        console.log("Make sure to enter the email address of your manager.")
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
        console.log("Make sure to enter the office number of your manager.")
        return false;
      }
    }
  },
]

const employeePrompt = [
  {
    type: 'list'
  }
]