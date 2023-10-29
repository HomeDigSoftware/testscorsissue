//const express = require('express');
//const cors = require('cors');
//const fetch = require('node-fetch');
import fetch from 'node-fetch';
import express from 'express';
import cors from "cors";
const PORT = 5000;
const app = express();

app.use(cors());
const corsOptions = {
    origin: "http://localhost:3000"
};

const requestEndpoint = "https://api.pandascore.co/valorant/matches/upcoming";
// const requestEndpoint_01 = "https://xkcd.com/327/info.0.json";
// const path = "https://api.pandascore.co/valorant/matches/upcoming"

app.get('/getData' , cors(corsOptions), async (req , res) => {
    const fetchOptions = {
        method: 'GET',
      
        headers: {
          accept: 'application/json',
          authorization: 'Bearer zZPjgAB6F45VSq8m_KkFT3lRm6WACovbn1bzx-86Q3-CPK3IAH0'
        }
    }
    const response = await fetch(requestEndpoint , fetchOptions);
    const jsonResponse = await response.json();
    // console.log(response.data)
    res.json(jsonResponse);
    // res.json(response);
});

app.listen(PORT, ()=> {
    console.log(`Example app listening at http://localhost:${PORT}`);
});