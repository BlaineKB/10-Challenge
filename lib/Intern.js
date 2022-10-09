const Employee = require("../lib/Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email)

    this.school = school;
  }

  addSchool() {
    return this.school;
  }

  addRole() {
    return "Intern";
  }

  addHtml() {
    return `
    <div class="card">
      <div class="card-body">
        <h3 class="card-title align-text-center">${this.name}</h3>
        <h4 class="card-subtitle align-text-center text-muted mb-3">${this.addRole()}</h4>
        <p class="card-text align-text-center"> ID: ${this.id}</p>
        <p class="card-text align-text-center"> School: ${this.school}</p>
        <a href="email:${this.email}" class="card-link">${this.email}</a>
      </div>
    </div>  

    `
  }
}

module.export = Intern;