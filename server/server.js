const express = require('express');
const pool = require('./database');
const cors = require('cors');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

const port = process.env.PORT || 3000;

const app = express();

app.use(cors({ origin: 'http://localhost:8080', credentials: true }));
// We need to include "credentials: true" to allow cookies to be represented  
// Also "credentials: 'include'" need to be added in Fetch API in the Vue.js App

app.use(express.json());  // Parses incoming requests with JSON payloads and is based on body-parser.
app.use(cookieParser());  // Parse Cookie header and populate req.cookies with an object keyed by the cookie names.




/* Saving new user's data to DB */
app.post('/auth/signup', async (req, res) => {
    try {
        console.log("new sign up request");
        const { email, password } = req.body;
        // TODO crypt the password with salt
        const authUser = await pool.query(
            "INSERT INTO users(email, password) values ($1, $2) RETURNING*", [email, password]
        )

        // TODO generate JWT token

        res
            .status(201)
            .json({ user_id: authUser.rows[0].id })
            .send;
    } catch (err) {
        console.log(err.message);
        res.status(400).send(err.message);
    }
});

app.post('/auth/login', async(req, res) => {
    try {
        console.log("a login request has arrived");
        const { email, password } = req.body;
        const user = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
        if (user.rows.length === 0) return res.status(401).json({ error: "User is not registered" });
        // const validPassword = await bcrypt.compare(password, user.rows[0].password);
        if (user.rows[0].password !== password) return res.status(401).json({ error: "Incorrect password" });
        // const token = await generateJWT(user.rows[0].id);
        res
            .status(201)
            // .cookie('jwt', token, { maxAge: 6000000, httpOnly: true })
            .json({ user_id: user.rows[0].id })
            .send;
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
});


app.get('/auth/logout', (req, res) => {
    // TODO clear cookie
});


app.listen(port, () => {
    console.log("Server is listening to port " + port)
});
