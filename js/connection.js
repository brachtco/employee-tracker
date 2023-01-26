const express = require('express');
const mysql = require('mysql2');
const consoleTable = require('console.table');
const { appendFile } = require('fs');


const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
    {
        host: 'localhost',
        used: 'root',
        password: '',
        database: 'employees_db'
    },
    console.log(`Connected to the employees_db`);
)

app.listen(PORT, () => 
    console.log(`Listening at http://localhost:${PORT}`)
);

