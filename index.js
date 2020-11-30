const express = require('express');
const bodyParser = require('body-parser');
const flash = require('express-flash');
const session = require('express-session');
const app = express();

let PORT = process.env.PORT || 3010;

app.use(express.static('public'));
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));

app.use(flash());

const pg = require('pg');
const Pool = pg.Pool;

let useSSL = false;
if (process.env.DATABASE_URL) {
    useSSL = true;
}

const connectionString = process.env.DATABASE_URL || 'postgresql://namhla_m:namhla1221@localhost:5432/shoe_api';

const pool = new Pool({
    connectionString,
    // ssl: useSSL
});



app.use(bodyParser.urlencoded({ extended: false}));

app.use(bodyParser.json());


app.listen(PORT, function(){
    console.log('started on:', this.address().port);
})

app.get("/");

app.get("/api/shoes");

app.get("/api/shoes/brand/:brandname");

app.get("/api/shoes/size/:size");

app.get("/api/shoes/brand/:brandname/size/:size");

app.post("/api/shoes/sold/:id");

app.post("/api/shoes");