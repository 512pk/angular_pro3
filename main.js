let express=require("express");

let app=express();

app.use(express.static('public'));


app.listen(3004,function(){
    console.log("server started");
})