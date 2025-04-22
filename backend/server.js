import express from "express"

const app = express();

app.get('/',(req , res) => {
    res.send('server is ready')
});

// list of five jokes

app.get('/jokes', (req , res) => {
    const jokes = [
        {
            id:1,
            title: 'A joke',
            content :'this is a joke'
        },
            {

            id:2,
            title: 'A joke',
            content :'this is a joke'
            },

            {
            id:3,
            title: 'A joke',
            content :'this is a joke'
        },

        {
            id:4,
            title: 'A joke',
            content :'this is a joke'
        },

        {
            id:5,
            title: 'A joke',
            content :'this is a joke'
        }
    ];
    res.send(jokes);
});


//see json in fromatter in tree form

const port = process.env.PORT || 3000 ;

app.listen(port , () => {
    console.log(`server at https://localost:${port}`);
});