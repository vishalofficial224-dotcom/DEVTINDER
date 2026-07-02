const express = require('express');
const cors = require('cors');



const app = express();

app.use(cors());
app.use(express.json());


app.patch('/user', (req, res) => {
    res.json({
        message: "patching"
    })
})

app.put('/user', (req, res) => {
    res.json({
        message: "putting"
    })
})

app.head('/user', (req, res) => {
    res.json({
        message: "headadsfsdfsdf"
    })
})

app.options('/user', (req, res) => {
    res.json({
        message: "a b c"
    })
})

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

app.delete('/user', (req, res) => {
    res.json({
        message: "user is deleted successfully!"
    })
})


app.listen(3000, () => {
    console.log("server started at 3000")
})