const { Pool } = require('pg');

// this code will work and a table will be created if you have already created the "testWad" database.
const pool = new Pool({
    user: "postgres",
    password: 'password', // Enter your password here
    database: "testWad", //Try to use the same name for your database
    host: "localhost",
    port: "5432"
});

const execute = async (query, values = []) => {
    try {
        await pool.connect();
        const result = await pool.query(query, values);
        return result;
    } catch (error) {
        console.error(error.stack);
        throw error;
    }
};


const createUserTblQuery = `
    CREATE TABLE IF NOT EXISTS "users" (
        id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
        email VARCHAR(200) NOT NULL UNIQUE,
        password VARCHAR(200) NOT NULL 
    );`;

//create 'posts' table if it doesn't exist
const createPostsTableQuery = `
    CREATE TABLE IF NOT EXISTS posts (
        id SERIAL PRIMARY KEY,
        content TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
`;

//add a new post
const addPost = async (content) => {
    const query = `INSERT INTO posts (content) VALUES ($1) RETURNING *;`;
    const values = [content];
    const result = await execute(query, values);
    return result.rows[0];
};


//get all posts
const getAllPosts = async () => {
    const query = `SELECT * FROM posts ORDER BY created_at DESC;`;
    const result = await execute(query);
    return result.rows;
};


//delete a post by ID
const deletePost = async (id) => {
    const query = `DELETE FROM posts WHERE id = $1 RETURNING *;`;
    const values = [id];
    const result = await execute(query, values);
    return result.rowCount > 0;
};

//creating initial tables if they do not exist
execute(createUserTblQuery).then(result => {
    if (result) {
        console.log('If it does not exist "users" table is created');
    }
});

execute(createPostsTableQuery).then(() => {
    console.log('If it does not exist, "posts" table has been created');
});

module.exports = {
    execute,
    addPost,
    getAllPosts,
    deletePost,
    pool
};