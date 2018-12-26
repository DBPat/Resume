const   express = require("express"),
        app     = express();

app.use(express.static(__dirname + "/public"));
app.set("view engine","ejs");

app.get("/",function(req,res){
    res.render("landing");
});


app.listen(3000, process.env.IP, function(){
    console.log("Running");
});