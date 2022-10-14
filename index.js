const express  = require('express')
const mongoose = require('mongoose')
const cookieParser=require('cookie-parser')
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config({path:"./.env"})
const checkAuthenticated = require('./middlewares/checkAuthenticated')
const authRouter = require('./routes/auth')
const userRouter = require('./routes/users')
const contractorRouter = require('./routes/contractors')
const app = express()

//Middlewares:
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended:true}))
app.use(helmet())
app.use(morgan("combined"))
app.use(cors())
//Routers:
app.use('/',authRouter)
app.use('/users',userRouter)
app.use('/contractors',contractorRouter)
app.get('/',checkAuthenticated, (req,res) => {
    res.send('Hello Shifting')
})

app.listen(5000, ()=> {
    console.log('app running at http://localhost:5000')
})

//connect to mongodb:
const db_url = process.env.db_url
mongoose.connect(db_url,()=>{
    console.log('Connected to DB')
})