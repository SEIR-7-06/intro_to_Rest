# Intro to REST

## Lesson Objectives

1. Describe REST and list the various routes
1. Create an Index route
1. Install JSONView to make viewing JSON easier
1. Create a Show route
1. Enhance the data array


## Setup

1. `cd ~/sei/express-fruits`
2. Open `express-fruits` in your editor.
3. `nodemon`


## Describe REST and list the various routes

REST stands for "Representational State Transfer." It's a set of principles that describe how networked resources are accessed and manipulated.

We have [7 RESTful routes](https://gist.github.com/alexpchin/09939db6f81d654af06b) that allow us basic operations for reading and manipulating a collection of data:

| **URL** | **HTTP Verb** |  **Action** | **Description** |
|------------|-------------|------------|------------|
| /photos/         | GET       | index  | Retrieve many/all photos
| /photos/new         | GET       | new   | Retrieve a form that can be used to create a new photo
| /photos          | POST      | create   | Send data to create a new photo
| /photos/:id      | GET       | show       | Retrieve one photo
| /photos/:id/edit | GET       | edit       | Retrieve a photo and a prepopulated form that can be used to edit that photo
| /photos/:id      | PATCH/PUT | update    | Send data to update an existing photo
| /photos/:id      | DELETE    | destroy  | Remove a photo


## Create a Show route

We already have a show route, but now we know to label it as such.

```js
const express = require('express');
const app = express();
const PORT = 3000;

// temporary, simulated database
const fruits = ['apple', 'banana', 'pear'];

// routes/controllers
// show route
// this route will catch GET requests to /fruits/anyValue
// and respond with a single the fruit
app.get('/fruits/:fruitIndex', (req, res) => {
    res.send(fruits[req.params.fruitIndex]);
});


app.listen(PORT, () => {
    console.log(`Listening for client requests on port ${PORT}`);
})
```

Let's confirm that it's still working: http://localhost:3000/fruits/1

## Create an Index route

Let's create a route that will respond with all of the data (i.e., the `fruits` array). To create an index route, we'd do the following:

```js
const express = require('express');
const app = express();
const PORT = 3000;

// temporary, simulated database
const fruits = ['apple', 'banana', 'pear'];

// routes/controllers
// show route
// this route will catch GET requests to /fruits/anyValue
// and respond with a single the fruit
app.get('/fruits/:fruitIndex', (req, res) => {
    res.send(fruits[req.params.fruitIndex]);
});

// index route
// this route will catch GET requests to /fruits
// and respond with all the fruits
app.get('/fruits/', (req, res) => {
    res.send(fruits);
});


app.listen(PORT, () => {
    console.log(`Listening for client requests on port ${PORT}`);
})
```

Now go to http://localhost:3000/fruits/


## Install JSONView to make viewing JSON easier

JSON stands for "Javascript Object Notation." It's a way to represent data that looks like a JavaScript object or array, and is a format that can be consumed by most platforms.

The JSONView extension makes JSON data easier to view.

Install it:

1. Go to https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa
2. Click on "Add To Chrome".


## Enhance the data in your data array

Right now, `fruits` data is just an array of strings. Data from a database is more often either a single object or an array of objects, so let's enhance our simulated data a bit:

```js
const express = require('express');
const app = express();
const PORT = 3000;

// temporary, simulated database
const fruits = [
    {
        name:'apple',
        color: 'red',
        readyToEat: true
    },
    {
        name:'pear',
        color: 'green',
        readyToEat: false
    },
    {
        name:'banana',
        color: 'yellow',
        readyToEat: true
    }
];

// routes/controllers
// show route
// this route will catch GET requests to /fruits/anyValue
// and respond with a single the fruit
app.get('/fruits/:fruitIndex', (req, res) => {
    res.send(fruits[req.params.fruitIndex]);
});

// index route
// this route will catch GET requests to /fruits
// and respond with all the fruits
app.get('/fruits/', (req, res) => {
    res.send(fruits);
});


app.listen(PORT, () => {
    console.log(`Listening for client requests on port ${PORT}`);
})
```

Let's take a look at our new data in the browser.

Reminder: Let's stop our server (`ctrl + c`).