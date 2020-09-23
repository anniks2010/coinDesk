const express = require('express');
const axios=require('axios');
const app=express();

app.get('/bitcoinRates',(req,res)=>{
let url= 'https://api.coindesk.com/v1/bpi/currentprice/eur.json';
let rate='';
let code='';
let disclaimer='';

axios.get(url)
    .then(function(response){
      rate=response.data.bpi.EUR.rate;
      code=response.data.bpi.EUR.code;
      disclaimer=response.data.disclaimer;
      res.write(`<p>${rate} ${code}</p>`);
      res.write(`<p> ${disclaimer}</p>`);
      res.send();  
    ////console.log(response.data.bpi.EUR.rate_float);
    })
    .catch(function(error){
    console.log(error);
    });

});



app.listen(3000,()=>{
console.log('Server is running on port 3000');
});