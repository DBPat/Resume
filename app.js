const   express = require("express"),
        app     = express();

app.use(express.static(__dirname));
app.set("view engine","ejs");

app.get("/",function(req,res){
    res.render("landing");
});

app.get("/About",function(req,res){
    res.render("about");
});

app.get("/Resume",function(req,res){
    res.render("resume");
});

app.get("/Projects",function(req,res){
    res.render("projects");
});

app.get("/Contact",function(req,res){
    res.render("contact");
});

app.get("/*",function(req,res){
    res.render("NotFound");
});

var port = process.env.port;
(!port)? port=3000 : port;

app.listen(port, process.env.IP, function(){
    console.log("Running");
});