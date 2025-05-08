const express = require('express');

const app = express();
const PORT = 3000;

function hello(req, res){
    res.set('Content-Type', 'text/html');
    res.status(200).send("<h1>Hello From Express!</h1>");
}

app.get('/', (req, res)=>{
    res.set('Content-Type', 'text/html');
    res.status(200).send("<p>This is the main page.</p>");
});

app.get('/hello', hello);

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);
