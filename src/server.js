const express = require('express');
const cors = require('cors');



const app = express();

app.use(cors());
app.use(express.json());


app.get('/user', (req, res) => {
    res.json({
        message: "this is user"
    })
})

app.post('/user', (req, res) => {
    res.json({
        message: "data saved successfully"
    })
})

app.use('/', (req, res) => {
    console.log('server is working');
    res.json({
        message: 'Server is working'
    })
})


app.listen(3000, () => {
    console.log("server started at 3000")
})