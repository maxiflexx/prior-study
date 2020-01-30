require('dotenv').config();

const express = require('express')
const bodyParser = require('body-parser')
const contentsRouter = require("./router/contents")
const userRouter = require("./router/users")


const app = new express()

app.set('views', __dirname + '/views');
app.set("view engine", 'ejs');

// app.get('/', (req, res) => res.send('Hello World!'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// app.use(express.json());
// app.use(express.urlencoded( {extended : false } ));

app.get('/', (req, res, next) => {
    res.render('index', {title: "title!!", length: 5})
    next();
})

app.get('/create', (req, res, next) => {
    res.render('create');
})

app.use("/user", userRouter);
app.use("/contents", contentsRouter);

app.listen(3000, () => {
    console.log("app.js 실행")
})

