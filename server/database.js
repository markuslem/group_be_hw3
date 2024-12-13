const Pool = require('pg').Pool;

// this code will work and a table will be created if you have already created the "testWad" database.
const pool = new Pool({
    user: "postgres",
    password: "postgres", // Enter your password here
    database: "testWad", //Try to use the same name for your database
    host: "localhost",
    port: "5432"
});

const execute = async(query) => {
    try {
        await pool.connect(); // gets connection
        await pool.query(query); 
        return true;
    } catch (error) {
        console.error(error.stack);
        return false;
    }
};

const createUserTblQuery = `
    CREATE TABLE IF NOT EXISTS "users" (
        id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
        email VARCHAR(200) NOT NULL UNIQUE,
        password VARCHAR(200) NOT NULL 
    );`;

// Creating initial tables if they do not exist
execute(createUserTblQuery).then(result => {
    if (result) {
        console.log('If it does not exist "users" table is created');
    }
});

module.exports = pool;