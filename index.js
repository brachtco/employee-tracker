
const {prompt} = require("inquirer");
const db = require('./db');
require('console.table');



showMenu();

//Function that starts the app and prompt the questions
function showMenu() {
  
    prompt({
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
        "EXIT",
      ],
    })
    .then(async function (answer) {
      switch (answer.menu) {
        case "View All Employees":
           viewAllEmployees();
          break;

        case "Add Employee":
           addEmployee();
          break;

        case "Update Employee Role":
           updateEmployeeRole();
          break;

        case "View All Roles":
           viewAllRoles();
          break;

        case "View All Departments":
           viewAllDepartments();
          break;

        case "Add Role":
           addRole();
          break;

        case "Add Department":
           addDept();
          break;

        case "EXIT":
          console.log("Thanks for using Employee Tracker!");
          process.exit();
      }
   
    });
  const addEmployee = () =>
    inquirer
      .prompt([
        {
          name: "first_name",
          type: "input",
          message: "Please enter the Employee's first name.",
        },
        {
          name: "last_name",
          type: "input",
          message: "Please enter the Employee's last name.",
        },
        {
          name: "role_id",
          type: "input",
          message: "Please enter the ID for the employee's role?",
        },
        {
          name: "manager_id",
          type: "input",
          message: "Please enter the ID for the employee's manager?",
        },
      ])
      .then(async (response) => {
        await db.query("INSERT INTO employee SET ?", response);
      });

  //Views all the roles
  const viewAllRoles =  () => {
   // const roles = await db.query("SELECT * FROM role");
   db.findAllRoles().then(([row])=> {
    let employees = row;
    console.table(employees); 
   }) ;

    //console.log(roles);
  };

  //Adds a role to the table
  const addRole = () =>
    inquirer
      .prompt([
        {
          name: "title",
          type: "input",
          message: "Please enter the title of the role.",
        },

        {
          name: "salary",
          type: "input",
          message: "Please enter the salary for this role.",
        },
        {
          name: "department_id",
          type: "input",
          message: "Please enter the department ID for the employee's role.",
        },
      ])
      .then(async ({ title, salary, department_id }) => {
        const query = `INSERT INTO role (title, salary, department_id) VALUES ('${title}', ${salary}, ${department_id})`;
        await db.query(query);
      });

  //Updates employee role
  const updateEmployeeRole = async () => {
    inquirer.prompt([
      {
        name: "title",
        type: "list",
        message: "Please select the employee to update.",
        choices: [
          "Tom","Hanks",
          "Jennifer","Lawrence",
          "Tina","Fey",
          "Paul","Rudd",
          "Kate","Hudson",
          "John","Kraskinsi",
          "Sigourney","Weaver",
        ],
      },
      {
        name: "role",
        input: "input",
        message: "Please select the new role of the employee."
      }
    ]).then((employeeResponse) => {
      console.log(employeeResponse);
     /* const employeeTable = await db.query(`INSERT INTO role (first_name, last_name, role_id, manager_id) VALUES ('${employeeResponse.first_name}', ${last_name}, ${role_id}, ${manager_id}`), {
    
      };
      (err, results) => {
        if (err) {
          console.log(err);
        }
      };
      console.log("New role added.");
    };

    };*/
  
});

// Views all the departments
const viewAllDepartments = async () => {
  const departments = await db.query("SELECT * FROM department");
  console.table(departments);
};

//Adds a department to the role
const addDepartment = async () => {
  inquirer.prompt([
    {
      name: "department",
      type: "input",
      message: "Please enter the name of the department.",
    },
  ]);
  const department_table = await db.query("INSERT INTO department SET ?", {
    name: response.name,
  });
  (err, results) => {
    if (err) {
      console.log(err);
    }
    console.log("New department added.");
  };
};
  };
}
/*function viewAllEmployees() {
  db.findAllEmployees()
  .then(([rows]) => {
    let employees = rows
    console.table(employees);
  })
  .then(() => showMenu())
}
function addEmployee() {
  inquirer
  .prompt([
    {
      name: "first_name",
      type: "input",
      message: "Please enter the Employee's first name.",
    },
    {
      name: "last_name",
      type: "input",
      message: "Please enter the Employee's last name.",
    },
  ])
  .then(res => {
    let firstName = res.first_name;
    let lastName = res.last_name;
    db.findAllRoles()
    .then(([rows]) => {
      let roles = rows;
      const roleChoices = roles.map(({id, title}) => ({
        name: title,
        value: id
      }))
      inquirer.prompt({ 
        type: 'list',
        name: 'roleId',
        message: 'What is the employees role?',
        choices: roleChoices
      })
      .then(res => {
        let roleId = res.roleId;
        db.findAllEmployees()
        .then(([rows]) => {
          let employees = rows;
          const managerChoices = employees.map(({id, first_name, last_name}) => ({
            name: `${first_name} ${last_name}`,
            value: id 
          }))
          managerChoices.unshift({name: "none", value: null})
          inquirer.prompt({
            type: 'list',
            name: 'managerId',
            message: 'Who is the employees manager?',
            choices: managerChoices
          })
          .then(res => {
            let employee = {
              manager_id: res.managerId,
              role_id: roleId,
              first_name: firstName,
              last_name: lastName
            }
            db.createEmployee(employee)
          })
          .then(() => console.log('Added the employee to the database'))
          .then(() => showMenu())
        })
      })
    })
  })
}


function viewAllRoles() {
  db.findAllRoles()
  .then(([rows]) => {
    let roles = rows
    console.table(roles);
  })
  .then(() => showMenu())
}
function addRole() {
  inquirer
  .prompt([
    {
      name: "name",
      type: "input",
      message: "Please enter the Employee's role.",
    },
 
  ])
  .then(res => {
    let name = res.name;
    db.findAllRoles()
    .then(([rows]) => {
      let roles = rows;
      const roleChoices = roles.map(({id, title}) => ({
        name: title,
        value: id
      }))
      inquirer.prompt({ 
        type: 'list',
        name: 'roleId',
        message: 'What is the employees role?',
        choices: roleChoices
      })
      .then(res => {
        let roleId = res.roleId;
        db.findAllEmployees()
        .then(([rows]) => {
          let employees = rows;
          const managerChoices = employees.map(({id, first_name, last_name}) => ({
            name: `${first_name} ${last_name}`*/
//-------------------------------------------------------------------------------------------------------