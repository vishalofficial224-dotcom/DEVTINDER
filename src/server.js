const express = require('express');
const cors = require('cors');



const app = express();

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    console.log('server is working');
    res.json({
        message: 'Server is working'
    })
})

app.use("/home" , (req, res) => {
    res.json({
        message: "it's working"
    })
})
app.listen(3000, () => {
    console.log("server started at 3000")
})