const express  = require('express');
const app = express()

app.get('/', (req,res) => {
    res.send('Hello Shifting')
})

app.listen(5000, ()=> {
    console.log('app running at http://localhost:5000');
})