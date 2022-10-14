const express = require('express')
const router = express.Router()
const User = require('../models/User')
//save the user given cities to the db:
router.put('/updateCity',async(req,res)=>{
    if(req.body.homeCity && req.body.destCity){
        try{
            const user = await User.findOne({google_id:"testgid"})
            //TODO: Remove debug
            console.log(user)
            //warning: no condition checks implemented
            await user.updateOne({$set:{"homeCity":req.body.homeCity,"destCity":req.body.destCity}})
            return res.status(200).json({"user":user})
        }catch(error){
            console.log(error)
            return res.status(500).json({error:"Internal Server Error"})
        }
        
    }else
        return res.status(400).json({error:"Bad request"})
})

module.exports =  router