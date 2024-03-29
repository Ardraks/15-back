const express=require("express")
const cors=require("cors")
const db=require("./connection/Database")


const loginrouter=require('./routes/Loginroute')
const registerrouter=require('./routes/Registerroute')
const updaterouter=require('./routes/Updateroute')
const postrouter=require('./routes/posts');


const updatemodel = require('./model/Update')
const loginmodel = require('./model/Login')
const Registermodel = require('./model/Register')
const Postmodel = require('./model/Post')


const  app=new express();

app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(cors());


app.get('/',(request,response)=>{
    response.send("hai")
})

  
 
app.use("/login",loginrouter)
app.use("/register",registerrouter)
app.use("/update",updaterouter)
app.use("/posts",postrouter)




app.listen(4005,(request,response)=>{
    console.log("port is running in 4005")
})
