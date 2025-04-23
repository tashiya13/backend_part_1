import express from "express"

// const express = require('express')
const app = express();

// app.get('/',(req , res) => {
//     res.send('server is ready')
// });

// list of five jokes

app.get('/api/jokes', (req , res) => {
    const jokes = [
        {
            id:1,
            title: 'A joke',
            content :'this is a joke'
        },
            {

            id:2,
            title: 'A  2 joke',
            content :'this is a  2 joke'
            },

            {
            id:3,
            title: 'A  3 joke',
            content :'this is a 3 joke'
        },

        {
            id:4,
            title: 'A 4 joke',
            content :'this is a  4 joke'
        },

        {
            id:5,
            title: 'A  5 joke',
            content :'this is a  5 joke'
        }
    ];
    res.send(jokes);
});


//see json in fromatter in tree form

const port = process.env.PORT || 3000 ;

app.listen(port , () => {
    console.log(`server at http://localost:${port}`);
});