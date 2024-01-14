const express = require('express');
const router = express.Router()

let output = '';
let error = '';
let variableOne;
let variableTwo;
let variableThree;
router.route('/')
    
    .get((req, res) => {
        res.render('home', {output, error,variableOne, variableTwo, variableThree})
    })
    .post((req, res) => {
        const{variableOne, variableTwo, variableThree} = req.body;

        if(!variableOne || !variableTwo || !variableThree){
            res.render('home', {error : 'Invalid Input', output} )
        }
        


        
        output = (variableTwo * variableThree) / variableOne;
        console.log(output)
        res.render('home', {output, error, variableOne, variableTwo, variableThree})
        
    })
    
module.exports = router;