
const express = require('express');
var cors = require('cors');
const axios = require("axios");
var app = express();
app.use(cors());

app.get('/tokenuri', async (req, res) => {
    console.log(req.query.url)
    const response = await axios.get(req.query.url);
    console.log(response)
    res.send(response.data.image);
});

app.listen(3001, () => console.log('Example app is listening on port 3001.'));
