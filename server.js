
const express = require('express');
var cors = require('cors');
const axios = require("axios");
const bodyParser = require("body-parser");
const { response } = require('express');
// const router = express.Router();
var app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/tokenuri', async (req, res) => {
    console.log(req.body.length);
    let imageUri = [];
    for (let i = 0; i<req.body.length; i++) {
        console.log(req.body[i]);
        let response = await axios.get(req.body[i]);
        imageUri[i] = response.data.image;
        console.log(imageUri[i]);
    }
    tempUri = JSON.stringify(imageUri);
    // .res.json()
    // console.log(imageUri);
    // for ()
    // const response = await axios.get(req.query.url);
    // console.log(response)
    // res.send(response.data.image);
    // res.json({ image: response.data.image })
    res.send(tempUri);
});

app.listen(3001, () => console.log('Example app is listening on port 3001.'));
