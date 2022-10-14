const express = require('express')
const router = express.Router()
const Contractor = require('../models/Contractor')

//get all contractors that match the customer's criteria:
router.get('/matchedCriteria',async(req,res)=>{
    //check the customer's from and to locations:
    if(req.body.homeCity && req.body.destCity){
        try{
            const contractors = await Contractor.find({"$and":[
                {locations:{"$in":[req.body.homeCity]}},
                {locations:{"$in":[req.body.destCity]}}
            ]})
            //TODO: Remove debug
            console.log(contractors)
            if(contractors.length >0){
                return res.status(200).json({"contractors":contractors})
            }
            //if no contractor found
            return res.status(404).json({"error":"There are currently no contractors that work in your city(s)"})
        
        }catch(error){
            console.log(error)
            return res.status(500).json({error:"Internal Server Error"})
        }
        
    }else
        return res.status(400).json({error:"Bad request"})
})

module.exports =  router