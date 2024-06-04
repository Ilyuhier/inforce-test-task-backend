
const express = require('express')
const app = express()
const port = 3001
const hostname = '127.0.0.1';
const filePath = './data.txt'

app.use(express.json({limit: '3000kb', extended: true}))
app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.append('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/items', (req, res) => {
  res.sendFile('D:/Fpro/Test-tasks/inforce-test-task-backend/data.txt')
})

app.listen(port, hostname,() => {
  console.log(`Server running at http://${hostname}:${port}/`)
})