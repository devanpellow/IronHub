require("dotenv").config();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const favicon = require("serve-favicon");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");

const session = require("express-session");
const passport = require("passport");

require("./configs/passport");

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/ironhack-projects", {
    useNewUrlParser: true
  })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

const app_name = require("./package.json").name;
const debug = require("debug")(
  `${app_name}:${path.basename(__filename).split(".")[0]}`
);

const app = express();

// Middleware Setup
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup

app.use(
  require("node-sass-middleware")({
    src: path.join(__dirname, "public"),
    dest: path.join(__dirname, "public"),
    sourceMap: true
  })
);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

// /!\

// app.use(express.static(path.join(__dirname, "public")));

// /!\

app.use(express.static(path.join(__dirname, "/user/project")));

app.use(favicon(path.join(__dirname, "public", "images", "favicon.ico")));

const MongoStore = require("connect-mongo")(session);

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({
      mongooseConnection: mongoose.connection
    })
  })
);

app.use(passport.initialize());
app.use(passport.session());

// default value for title local
app.locals.title = "Express - Generated with IronGenerator";

// /!\

// const index = require("./routes/index");
// app.use("/", index);

// /!\

const projects = require("./routes/projects");
app.use("/api/projects", projects);

const tasks = require("./routes/tasks");
app.use("/api/tasks", tasks);

const auth = require("./routes/auth");
app.use("/api/auth", auth);

app.use((req, res) => {
  // If no routes match, send them the React HTML.
  res.sendFile(__dirname + "/user/project/index.html");
});

module.exports = app;
