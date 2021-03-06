const express = require('express');
const router = express.Router();
const dotenv = require('dotenv').config();
const Unsplash = require('unsplash-js').default;
const {toJson} = require('unsplash-js');
const unsplash = new Unsplash({accessKey:process.env.myAccessKey});
//3. Configuration here


//4. add API here
router.post('/api/searchPhotos', (req,res)=>{
    let {keyword} = req.body;
    unsplash.search.photos(keyword,1,21)
    .then(toJson)
    .then(json =>{
       res.status(200).send(json)
    })
    .catch((err)=>{
        console.log("Error Message -->", err);
        res.status(200).send({"messageError":err})
    });

    //PUT YOUR CODE HERE
});

module.exports = router;