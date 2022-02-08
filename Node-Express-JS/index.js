const express = require('express')
const app = express(),
port = 3000;

app.get('/trangchu', (req,res) => res.send('Hello world!'));
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));