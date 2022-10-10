const Employee = require("../lib/Employee");

// Constructor function that creates the Intern class which extends the Employee class
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email)

    this.school = school;
  }

  // Methods to grab properties
  getSchool() {
    return this.school;
  }

  getRole() {
    return "Intern";
  }

  addHtml() {
    return `
    <div class="card">
      <div class="card-body">
        <h3 class="card-title align-text-center">${this.name}</h3>
        <h4 class="card-subtitle align-text-center text-muted mb-3">${this.getRole()}</h4>
        <p class="card-text align-text-center"> ID: ${this.id}</p>
        <p class="card-text align-text-center"> School: ${this.school}</p>
        <a href="email:${this.email}" class="card-link">${this.email}</a>
      </div>
    </div>  

    `
  }
}

module.exports = Intern;