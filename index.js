const express  = require('express')
const cookieParser=require('cookie-parser')
const { default: helmet } = require('helmet')
const morgan = require('morgan')
const checkAuthenticated = require('./middlewares/checkAuthenticated')
const authRouter = require('./routes/auth')
const app = express()

//Middlewares:
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended:true}))
app.use(helmet())
app.use(morgan("combined"))

//Routers:
app.use('/',authRouter)
app.get('/',checkAuthenticated, (req,res) => {
    res.send('Hello Shifting')
})

app.listen(5000, ()=> {
    console.log('app running at http://localhost:5000')
})