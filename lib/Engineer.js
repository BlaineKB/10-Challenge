const Employee = require("../lib/Employee");

// Constructor function that creates Engineer class which extends the Employee class
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email)

    this.github = github;
  }

  // Methods to grab properties
  getGithub() {
    return this.github;
  }

  getRole() {
    return "Engineer"
  }

  addHtml() {
    return `
    <div class="card">
      <div class="card-body">
        <h3 class="card-title align-text-center">${this.name}</h3>
        <h4 class="card-subtitle align-text-center text-muted mb-3">${this.getRole()}</h4>
        <p class="card-text align-text-center"> ID: ${this.id}</p>
        <a href="https://www.github.com/${this.github}" class="card-link"> GitHub</a>
        <a href="email:${this.email}" class="card-link">${this.email}</a>
      </div>
    </div>     
    `
  }
}

module.exports = Engineer;