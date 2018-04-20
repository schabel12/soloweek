const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
const axios = require('axios');

app.use(express(__dirname + '/client/src'));
app.use(bodyParser.json());



app.get('/findFood', (req, res) => {
  // console.log('getting food. req is ...', req.query)
  userArr = req.query[0].split(' ');
  var userInput = ''
  if (userArr.length > 1){
    userArr.forEach((word, ind)=>{
      if (ind !== userArr.length-1){
        userInput += word+'&'
      } else {
        userInput += word
      }
    })
  } else {
    userInput = userArr[0];
  }
  console.log('userInput is...', userInput)

  //might want to take out the secret and client id
  var apiQuery = `https://api.iamdata.co/v1/products?name=${userInput}&full_resp=true&client_id=w4SiMChO&client_secret=iAa48ux12c4EFsCrqvlOyMjKWHG3oOfD`
  axios.get(apiQuery)
  .then((response) => {
      console.log('response from api data...', response.data),
      res.send(response.data)
  })
  .catch((err) =>{
      console.log('api error', err);
      res.send(err)
    }
  )
});

app.listen(port, () => console.log(`Listening on port ${port}`));