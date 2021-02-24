const express=require('express') 
const app=express()
const path=require('path')

const cors = require('cors');
app.use(cors());
var cookieParser = require('cookie-parser');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname,'/dist')))

// app.get('/',function(req,res){
//     res.send("it's working")
// })
app.get('/*',function(req,res){
    res.sendFile(__dirname+'/dist/index.html')
})
app.listen(process.env.PORT || 4200,()=>{  
    console.log(`serving website `);
})