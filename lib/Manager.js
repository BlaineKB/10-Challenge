const Employee = require("../lib/Employee");

// Constructor function to create Manager class which extends the Employee class
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email)
    this.officeNumber = officeNumber
  }

  OfficeNumber() {
    return this.officeNumber;
  }

  getRole() {
    return "Manager"
  }

  addHtml() {
    return `
    <div class="card">
      <div class="card-body">
        <h3 class="card-title align-text-center">${this.name}</h3>
        <h4 class="card-subtitle align-text-center text-muted mb-3">${this.getRole()}</h4>
        <p class="card-text align-text-center"> ID: ${this.id}</p>
        <p class="card-text align-text-center"> Office Number: ${this.OfficeNumber()}</p>
        <a href="email:${this.email}" class="card-link">${this.email}</a>
      </div>
    </div>  
    `
  }
}

module.exports = Manager;