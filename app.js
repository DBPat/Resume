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

app.get("/Projects/GACondomFinder",function(req,res){
    res.render("Projects/GACondomFinder");
});

app.get("/Projects/GradePredictor",function(req,res){
    res.render("Projects/GradePredictor");
});

app.get("/Projects/BKMS",function(req,res){
    res.render("Projects/BKMS");
});

app.get("/Projects/CICO",function(req,res){
    res.render("Projects/CICO");
});

app.get("/Projects/BKMSApp",function(req,res){
    res.render("Projects/BKMSApp");
});

app.get("/Projects/Yelpcamp",function(req,res){
    res.render("Projects/Yelpcamp");
});

app.get("/Projects/BoxApp",function(req,res){
    res.render("Projects/BoxApp");
});


app.get("/*",function(req,res){
    res.render("NotFound");
});

var port = process.env.PORT;
(!port)? port=3000 : port;

app.listen(port, process.env.IP, function(){
    console.log("Running");
});