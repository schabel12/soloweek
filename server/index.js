const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;
const axios = require("axios");
const path = require("path");
require('dotenv').config();
const Review = require("./models/reviews.js");
const db = require("./db.js");


app.use(express.static(path.join(__dirname, "../build")));
app.use(bodyParser.json());

app.get("/findFood", (req, res) => {
  // console.log('getting food. req is ...', req.query)
  userArr = req.query[0].split(" ");
  var userInput = "";
  if (userArr.length > 1) {
    userArr.forEach((word, ind) => {
      if (ind !== userArr.length - 1) {
        userInput += word + "&";
      } else {
        userInput += word;
      }
    });
  } else {
    userInput = userArr[0];
  }
  console.log("userInput is...", userInput);

  //might want to take out the secret and client id
  var apiQuery = `http://supermarketownbrandguide.co.uk/api/newfeed.php?json=search&q=${userInput}&page=0&apikey=cdAhssXpQymyNdMucuQs`;
  // var apiQuery = `https://api.iamdata.co/v1/products?name=${userInput}&full_resp=true&client_id=w4SiMChO&client_secret=iAa48ux12c4EFsCrqvlOyMjKWHG3oOfD`
  axios
    .get(apiQuery)
    .then(response => {
      console.log("response from api data...", response.data),
        res.send(response.data);
    })
    .catch(err => {
      console.log("api error", err);
      res.send(err);
    });
});

app.post('/likeProduct', (req, res) => {
  console.log('req likeproduct reqbodyparams...', req.body.params)
  Review.findOrCreate({where: {"name": req.body.params}})
  .spread((product, created)=>{
      product.increment(['likeCount'], {by: 1})
      console.log(created)
    })
    res.end()
});

app.post('/dislikeProduct', (req, res) => {
  console.log('req likeproduct reqbodyparams...', req)
  Review.findOrCreate({where: {"name": req.body.params}})
  .spread((product, created)=>{
      product.increment(['dislikeCount'], {by: 1})
      console.log(created)
    })
    res.end()
})

app.get('/productRating', (req, res) => {
  console.log('getting rating...req.body.params', req.query[0])
  Review.findOrCreate({where: {"name": req.query[0]}})
  .spread((product, created) => {
    var total = product.dataValues.likeCount+product.dataValues.dislikeCount;
    var score = Math.round(product.dataValues.likeCount/total*100);
    score.toString();
    score = score+'% like this product'
    console.log('score is...', score)
    res.send(200, score)
  })
})



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

db.sync()
.then(() => 
  app.listen(port, () => console.log(`Listening on port ${port}`))
)

