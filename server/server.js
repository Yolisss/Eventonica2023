//This is the minimal express server.
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
require("dotenv").config();
const db = require("../server/db/db-connection.js");

const app = express();
const PORT = 8086;

// Configuring cors middleware
app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// //creates an endpoint for the route `/`
app.get("/", (req, res) => {
  res.json("Hello Techtonica Server for an app with Events");
});

app.get("/api/events", async (req, res) => {
  //real connection with the DB eventonica
  try {
    //rows property from pg library
    const { rows: events } = await db.query("SELECT * FROM events");
    res.send(events);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error });
  }

  //hardcode the events response for testing reasons. This call has one more event that the real DB
  // const events = [

  //     {id: 1, title: 'Women in Tech Techtonica Panel', location: 'Overland Park Convention Center'},
  //     {id: 2, title: 'Japanese Cultural Education', location: 'Seattle Convention Center'},
  //     {id: 3, title: "Haven 90's Party Night Club", location: 'Hilton Hotel Kansas City'},
  //     {id: 4, title: 'Comedy Night at the Station', location: 'SF Hilton Hotel'},
  //     {id: 5, title: 'A Decadent Arts Experience', location: 'West Ridge Mall'},
  //     {id: 6, title: 'Techtonica Classroom Course', location: 'Techtonica HQ'}
  //   ];
  // res.json(events);
});

app.post("/api/events", async (req, res) => {
  //TO - DO - At the end => save this event to the db
  //INSERT INTO events (title, location, eventtime) VALUES ('Women in Tech Techtonica Panel', 'Overland Park Convention Center', '2023-04-21')
  try {
    //creating an object to store all of the information
    //specifically all of the event info
    const newEvent = {
      title: req.body.title,
      location: req.body.location,
      eventtime: req.body.eventtime,
    };

    //query=operation you want to perform on the db
    //operation takes certain parameters
    //insert operation where you can append data to a table
    //events (which is your table) is your first param
    //second param would be the columns you want to affect
    //third param: what values you want to insert into those columns
    //$1,$2,$3 placeholders and this allows you as 'prepared statement'
    //prepared statement, secure way of giving a query user inputted
    //data, if you don't use prepared statement, sequel injection
    //is possible
    //$1 refers to the first element (index 0) in the array you give it
    //wild card(*) any value or every value
    //RETURNING * = 'give me value from every column from
    //the row that was just inserted'
    const result = await db.query(
      "INSERT INTO events(title, location, eventtime) VALUES ($1, $2, $3) RETURNING *",
      [newEvent.title, newEvent.location, newEvent.eventtime]
    );
    let response = result.rows[0];
    console.log(response);
    res.json(response);
  } catch (e) {
    console.log(error);
    return res.status(400).json({ error });
  }
});

//TO SPECIFY WHICH OBJ OF ARRAY DO I WANT TO GET
app.put("/api/events/:id", async (req, res) => {
  try {
    //creating an object to store all of the information
    //specifically all of the event info
    const updateResult = await db.query(
      //SET specifies which columns you want to update to which values
      //id: what row should it affect
      //without WHERE it will update every row of the table
      "UPDATE events SET title = $1, location = $2, datettime = $3 WHERE id = $4",
      [req.body.title, req.body.location, req.body.datettime, req.body.id]
    );
    let response = result.rows[0];
    console.log(response);
    res.json(response);
  } catch (e) {
    console.log(error);
    return res.status(400).json({ error });
  }
});

app.listen(PORT, () =>
  console.log(`Hola! Server running on Port http://localhost:${PORT}`)
);

//WHEN WE WORK WITH ASYNC AWAIT
//equivalent to .then and .catch (this is what you have in the front end)
//whenever you await a promise
//if the promise is rejected (fails) then
//that throws an exception
//an uncaught exception is fatal meaning
//your program (server) will terminate immediately
//to prevent that from happening, you want to catch those exceptions
//
