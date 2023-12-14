const express = require("express")
const fs = require("fs")
const app = express()

const names = ["Marco", "Benjamin", "Colin", "David", "Cyril", "Fabian", "Adrian", "Hannes", "Iris", "Jonas", "Klara", "Lukas", "Mia", "Nico", "Olivia", "Paul", "Quentin", "Rosa", "Simon", "Tina"]


app.get('/now', (request, response) => {
  const now = new Date().toLocaleTimeString();
  response.send(`Es ist gerade: ${now}`)
});

app.get('/zli', (request, response) => {
  const link = "https://www.zli.ch"
  response.redirect(link)
});

app.get('/name', (request, response) => {
  const randomName = names[Math.floor(Math.random() * names.length)]
  response.send(`Hallo ${randomName}`)
});

app.get('/html', (request, response) => {
  response.sendFile(__dirname + '/static.html') 
});

app.get('/image', (request, response) => {
  response.sendFile(__dirname + '/nodeJSlogo.png')
});

app.get('/teapot', (request, response) => {
  response.sendStatus(418) 
});

app.get('/user-agent', (request, response) => {
  const userAgent = request.headers["user-agent"]
  response.send(`Du nutzt: ${userAgent}`)
});

app.get('/secret', (request, response) => {
  response.sendStatus(403)
});

app.get('/xml', (request, response) => {
    fs.readFile('static.xml', (err, data) => {
      if(err) {
        response.sendStatus("500");
      } else {
        response.type("xml")
        response.send(data)
      }
    })
  });
  

app.get('/me', (request, response) => {
  const me = {
    "name": "Marco",
    "lastName": "Matteo",
    "age": "16",
    "residence": "maennedorf",
    "eyecolor" : "brown"
  }
  response.json(me)

});

app.listen(3000)