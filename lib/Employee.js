// Employee constructor function
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  addName() {
    return this.name;
  }

  addId() {
    return this.id;
  }

  addEmail() {
    return this.email;
  }

  addRole() {
    return "Employee";
  }
}

module.exports = Employee;