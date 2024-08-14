
const cors = require('cors');
require('dotenv').config();
const bodyParser = require('body-parser');

const express = require('express');
const mongoose = require('mongoose');
 
const {connection} = require("./db")
const { movieRouter } = require('./Routes/movie.routes');

const app = express();

app.use(express.json())
app.use(express.static('public'));
 app.use(cors())

app.use("/movies",movieRouter)


  const PORT = process.env.PORT || 7000;

    async function startServer() {
        try {
          await connection;
          console.log("Database connection Established");
        } catch {
          console.log("Database connection Failed");
        }
      
        app.listen(PORT,() => {
          console.log(`Server is running at http://localhost:${PORT}`);
          console.log("Server Started");
        });
      }
      
      startServer();