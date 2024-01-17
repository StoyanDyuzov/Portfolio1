const express = require("express")
const app = express()

app.set("view engine ","ejs")
app.use(express.static("design"))

app.get("/",(req,res)=>{
    res.render(__dirname + "/main/index.ejs")
})

app.listen(process.env.PORT || 2000, ()=>{
    console.log("Server is running")
})