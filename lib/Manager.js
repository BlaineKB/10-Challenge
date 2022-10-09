const Employee = require("../lib/Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email)
    this.officeNumber = officeNumber
  }

  addOfficeNumber() {
    return this.officeNumber;
  }

  addRole() {
    return "Manager"
  }

  addHtml() {
    return `
    <div class="card">
      <div class="card-body">
        <h3 class="card-title align-text-center">${this.name}</h3>
        <p class="card-subtitle align-text-center text-muted mb-3">${this.addRole()}</p>
        <p class="card-text align-text-center"> ID: ${this.id}</p>
        <p class="card-text align-text-center"> Office Number: ${this.addOfficeNumber()}</p>
        <a href="email:${this.email}" class="card-link">${this.email}</a>
      </div>
    </div>  
    `
  }
}

module.exports = Manager;