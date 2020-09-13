var express = require("express");
var app = express();
var passport = require("passport");
var LocalStrategy = require("passport-local");
var bodyparser = require("body-parser");
var seed = require("./seed");
var Stories = require("./models/story.js");
var User = require("./models/user.js");
const { request } = require("express");
var mongoose = require("mongoose");
app.use(bodyparser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use(function (req, res, next) {
    res.locals.currentUser = req.user;
    next();
})

//PASSPORT SETUP
app.use(require("express-session")({
    secret: "This is the Hashkey",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(express.static(__dirname + "/public"));

mongoose.connect("mongodb+srv://mrityu:msm8974ac@cluster0.evoz4.mongodb.net/<dbname>?retryWrites=true&w=majority",
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });

// seed();

app.get("/", function (req, res) {

    Stories.find({}, function (err, dbStories) {
        if (err) console.log(err);
        else
            res.render("index.ejs", { stories: dbStories, currentUser: req.user });

    });
});


app.get("/register", function (req, res) {
    res.render("register.ejs");
});

app.post("/register", function (req, res) {
    var newuser = new User({
        username: req.body.username
    });
    console.log(req.body.username);
    User.register(newuser, req.body.password, function (err, user) {
        if (err) {
            res.render("register.ejs");
        }
        else {
            passport.authenticate("local")(req, res, function () {
                res.redirect("/");
            });
        }
    });

});



//================
//LOGIN ROUTES
//================
app.get("/login", function (req, res) {
    res.render("login.ejs");
});

app.post("/login", passport.authenticate("local",

    {
        successRedirect: "/",
        failureRedirect: "/login"
    }),
    function (req, res) {
    });
//Logout route
app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
});


app.get("/:id", isLoggedIn, function (req, res) {

    Stories.findById(req.params.id, function (err, foundstory) {
        if (err) console.log(err);
        else {
            foundstory.viewed.addToSet(req.user);
            foundstory.save();
            res.render("show.ejs", { story: foundstory });
        }
    });
});


//================
//REGISTER ROUTES
//================

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    else {
        res.render("login");
    }
}

app.listen(process.env.PORT || 3000, function () {
    console.log("BookStore server has started!!");
});
