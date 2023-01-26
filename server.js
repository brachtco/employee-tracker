const { getRandomValues } = require('crypto');
const { response } = require('express');
const inquirer = require('inquirer');
const path = require('path')

//Function that starts the app and prompt the questions
function showMenu()  {
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

// Views all the employees
const viewAllEmployees = async () => {
    const employee_table = await db.query('SELECT * FROM employees'); function (err, result) {
     }
      if (err) {
            console.log(err);
    }
            console.log(result);
}    

const addEmployee = async () => {
        inquirer
            .prompt([
                {
                    name: "firstName",
                    type: "input",
                    message: "Please enter the Employee's first name."
                }

                {
                    name: "lastName",
                    type: "input",
                    message: "Please enter the Employee's last name."
                }

                {
                    name: "roleId",
                    type: "input",
                    message: "Please enter the ID for the employee's role?"
                }

                {
                    name: "managerId",
                    type: "input",
                    message: "Please enter the ID for the employee's manager?"
                }
            ]) 
    const department_table = await db.query('INSERT INTO employee 
                                            first_name, 
                                            last_name, 
                                            role_id, 
                                            manager_id)
                                            VALUES(?,?,?,?)'
                                            [response.first_name, 
                                             response.last_name, 
                                             response.role_id,
                                             response.manager_id],
}

const viewAllRoles = async () => {
    const employee_table = await db.query('SELECT * FROM role'); (err, results) => {
     
      if (err) {
            console.log(err);
    }
            console.log(results);
}
}    

const addRole = async () => {
    inquirer
        .prompt([
            {
                name: "title",
                type: "input",
                message: "Please enter the title of the role."
            }

            {
                name: "salary",
                type: "input",
                message: "Please enter the salary for this role."
            }

            {
                name: "departmentId",
                type: "input",
                message: "Please enter the department ID for the employee's role."
            }
        ]) 

const department_table = await db.query('INSERT INTO rol SET ?' {
                                        title: response.title, 
                                        salary: response.salary, 
                                        department_id: response.department_id); (err, result) => {
        if (err) {
            console.log(err);
        }
            console.log('New role added.');
    }
}
                            

const viewAllDepartments()

updateEmployeeRole()



addDepartment()