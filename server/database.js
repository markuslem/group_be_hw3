const Pool = require('pg').Pool;

// this code will work and a table will be created if you have already created the "testWad" database.
const pool = new Pool({
    user: "postgres",
    password: "postgres", // Enter your password here
    database: "testWad", //Try to use the same name for your database
    host: "localhost",
    port: "5432"
});