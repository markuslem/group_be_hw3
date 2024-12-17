const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const { pool, execute, getAllPosts } = require("./database");

const port = process.env.PORT || 3000;

const app = express();

app.use(cors({ origin: 'http://localhost:8080', credentials: true }));
// We need to include "credentials: true" to allow cookies to be represented  
// Also "credentials: 'include'" need to be added in Fetch API in the Vue.js App

app.use(express.json());  // Parses incoming requests with JSON payloads and is based on body-parser.
app.use(cookieParser());  // Parse Cookie header and populate req.cookies with an object keyed by the cookie names.

const secret = "gdgdhdbcb770785rgdzqws";
const maxAge = 60 * 60;
const generateJWT = (id) => {
    return jwt.sign({ id }, secret, { expiresIn: maxAge })
}

app.get('/auth/authenticate', async(req, res) => {
    console.log('authentication request has been arrived');
    const token = req.cookies.jwt; // assign the token named jwt to the token const
    //console.log("token " + token);
    let authenticated = false; // a user is not authenticated until proven the opposite
    try {
        if (token) { //checks if the token exists
            //jwt.verify(token, secretOrPublicKey, [options, callback]) verify a token
            await jwt.verify(token, secret, (err) => { //token exists, now we try to verify it
                if (err) { // not verified, redirect to login page
                    console.log(err.message);
                    console.log('token is not verified');
                    res.send({ "authenticated": authenticated }); // authenticated = false
                } else { // token exists and it is verified 
                    console.log('author is authinticated');
                    authenticated = true;
                    res.send({ "authenticated": authenticated }); // authenticated = true
                }
            })
        } else { //applies when the token does not exist
            console.log('author is not authinticated');
            res.send({ "authenticated": authenticated }); // authenticated = false
        }
    } catch (err) {
        console.error(err.message);
        res.status(400).send(err.message);
    }
});


/* Saving new user's data to DB */
app.post('/auth/signup', async(req, res) => {
    try {
        console.log("a signup requeSSSSSSSsst has arrived");
        console.log(req.body);
        const { email, password } = req.body;

        const salt = await bcrypt.genSalt(); //  generates the salt, i.e., a random string
        const bcryptPassword = await bcrypt.hash(password, salt) // hash the password and the salt 
        const authUser = await pool.query( // insert the user and the hashed password into the database
            "INSERT INTO users(email, password) values ($1, $2) RETURNING*", [email, bcryptPassword]
        );
        console.log(authUser.rows[0].id);
        const token = await generateJWT(authUser.rows[0].id); // generates a JWT by taking the user id as an input (payload)
        console.log(token);

        res
            .status(201)
            .cookie('jwt', token, { maxAge: 6000000, httpOnly: true })
            .json({ user_id: authUser.rows[0].id })
            .send;
    } catch (err) {
        console.error(err.message);
        res.status(400).send(err.message);
    }
});

app.post('/auth/login', async(req, res) => {
    try {
        console.log("a login request has arrived");
        const { email, password } = req.body;
        const user = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
        if (user.rows.length === 0) return res.status(401).json({ error: "User is not registered" });


        //Checking if the password is correct
        const validPassword = await bcrypt.compare(password, user.rows[0].password);
        if (!validPassword) return res.status(401).json({ error: "Incorrect password" });

        const token = await generateJWT(user.rows[0].id);
        res
            .status(201)
            .cookie('jwt', token, { maxAge: 6000000, httpOnly: true })
            .json({ user_id: user.rows[0].id })
            .send;
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
});


//delete all posts
app.delete('/posts', async (req, res) => {
    try {
        const query = "DELETE FROM posts";
        await pool.query(query);
        res.status(200).json({ message: "All posts deleted successfully" });
    } catch (error) {
        console.error("Error deleting all posts:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
});


//fetch all posts
app.get('/posts', async (req, res) => {
    try {
        const posts = await getAllPosts();
        res.status(200).json(posts);
    } catch (error) {
        console.error("Error fetching posts:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
});


//add a new post
app.post("/posts", async (req, res) => {
    try {
      const { content } = req.body;
      if (!content) return res.status(400).json({ error: "Content is required" });
  
      const query = `INSERT INTO posts (content) VALUES ($1) RETURNING *;`;
      const values = [content];
      const result = await execute(query, values);
  
      res.status(201).json({ message: "Post added successfully", post: result.rows[0] });
    } catch (error) {
      console.error("Error adding post:", error.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  
//fetch a single post by ID
app.get('/posts/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const query = "SELECT * FROM posts WHERE id = $1";
        const result = await pool.query(query, [id]);

        if (result.rows.length === 0) {
            return res.status(404).json({ error: "Post not found" });
        }

        res.status(200).json(result.rows[0]);
    } catch (error) {
        console.error("Error fetching post by ID:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

//update a post by ID
app.put('/posts/:id', async (req, res) => {
    try {
        const { id } = req.params; 
        const { content } = req.body; 

        if (!content) return res.status(400).json({ error: "Content is required" });

        const query = "UPDATE posts SET content = $1 WHERE id = $2 RETURNING *";
        const values = [content, id];

        const result = await pool.query(query, values);

        if (result.rows.length === 0) {
            return res.status(404).json({ error: "Post not found" });
        }

        res.status(200).json({ message: "Post updated successfully", post: result.rows[0] });
    } catch (error) {
        console.error("Error updating post:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

//delete a post by ID
app.delete('/posts/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const query = "DELETE FROM posts WHERE id = $1 RETURNING *";
        const values = [id];

        const result = await pool.query(query, values);

        if (result.rowCount === 0) {
            return res.status(404).json({ error: "Post not found" });
        }

        res.status(200).json({ message: "Post deleted successfully" });
    } catch (error) {
        console.error("Error deleting post:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
});



app.get('/auth/logout', (req, res) => {
    console.log('delete jwt request arrived');
    res.status(202).clearCookie('jwt').json({ "Msg": "cookie cleared" }).send
});


app.listen(port, () => {
    console.log("Server is listening to port " + port)
});
