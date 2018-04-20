const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// UNCOMMENT FOR REACT
app.use(express.static(__dirname));

app.get('/findFood', (req, res) => {
    console.log('request body is...', req.body);
    res.end()
})

app.listen(3000, () => {
    console.log(`listening on port 3000`);
  });