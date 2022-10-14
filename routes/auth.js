const router = require('express').Router()

router.get('/login',(req,res)=>{
    res.status(200).json({err:"LOGIN"})
})
//handle the google login:
router.post('/login',async(req,res)=>{
    try{
        const token=req.body.token
        const verification=await verifyToken(token)
        if(verification.status==200){
            res.cookie('session-token',token)
            res.sendStatus(200)
        }
        else
            res.status(400).json({error:"Bad Request"}) 
    }
    catch(error){
        console.log(error)
        return res.status(500).json({error:"Server error"})
    }
})
//NO NEED TO IMPLEMENT:
//Handle logout:
router.get('/logout',(req,res)=>{
    //clear the session cookie:
    res.clearCookie('session-token')
    res.redirect('/login')
})

module.exports = router