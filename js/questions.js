const inquirer = require('inquirer');
const path = require('path')

//Function that starts the app and prompt the questions
showMenu() => {
    inquirer
      .prompt({
        name: "menu",
        type: "list",
        message: "What would you like to do?",
        choices: [
          "View All Employees",
          "Add Employee",
          "Update Employee Role",
          "View All Roles",
          "Add Role",
          "View Departments",
          "Add Department",
          "EXIT"
        ]
      })
  .then(function(answer) {
      switch (answer.menu) {
      case "View All Employees":
        viewEmployees();
        break;

      case "Add Employee":
        addEmployee();
        break;

      case "Update Employee Role":
        updateEmployeeRole();
        break;
      
      case "View All Roles":
        viewRoles();
        break;
  
      case "View All Departments":
        viewDept();
        break;
      
      case "Add Role":
        addRole();
        break;
  
      case "Add Department":
        addDept();
        break;

      case "EXIT":
        console.log("Thanks for using Employee Tracker!")
        process.exit();
      }
    });
  }
};


//functions from switch
viewAllEmployees()
    




addEmployee()
updateEmployeeRole()
viewAllRoles()
addRole()
viewAllDepartments()
addDepartment()