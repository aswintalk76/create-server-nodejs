const express = require("express");
const app = express();
const port = process.env.port || 5000;

//Defaule route
app.get('/', (req, res) => {
    res.send(`Server in working on ${port}`)
});

//add listner
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})