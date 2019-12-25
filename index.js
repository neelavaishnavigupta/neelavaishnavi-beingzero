const express = require('express');
const app = express();
const port=process.env.PORT||3000
app.use(express.static('private'))

app.get('/', (req, res) => res.sendFile(__dirname + '/private/html/resume.html'))

app.listen(port ,()=>console.log(`example app listening on port ${port}!`))