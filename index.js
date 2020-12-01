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

app.get('/api/shoes', async function  (req, res) {
    try {
        let shoes = await shoppingServie.allShoes();
        res.json({
            status: "success",
            data: shoes
        })
    } catch (e) {
        res.json({
           
        })
    }
})


app.post('/api/shoes',  async function(req, res)  {
    try {
        const {
            brand,
            color,
            shoeSize,
            quantity,
            price
        } = req.body;
        if (brand !== undefined && shoeSize !== undefined && quantity !== undefined &&
            price !== undefined && color !== undefined) {
            let addNewShoe = await shoppingServie.addShoe(brand, color, shoeSize, price, quantity);
            res.json({
                status: "success",
                data: addNewShoe
            })
        } else {
            res.json({
                
            })
        }
    } catch (e) {
        res.json({
           
        })
    }
})


app.get('/api/shoes/brand/:brandname', async function (req, res)  {
    try {
        const {
            brandname
        } = req.params;
        if (brandname !== '' && brandname !== undefined) {
            let searchByBrand = await shoppingServie.findByBrand(brandname);
            res.json({
                status: "success",
                data: searchByBrand
            })
        } else {
            return false;
        }
    } catch (e) {
        res.json({
           

        })
    }
})


app.get('/api/shoes/size/:size', async function (req, res) {
    try {
        const {
            size
        } = req.params;
        if (size !== '' && size !== undefined) {
            let searchBySize = await shoppingServie.findBySize(size);
            res.json({
                status: "success",
                data: searchBySize
            })
        } else {
            return false;
        }
    } catch (e) {
        res.json({
          

        })
    }
})

app.get('/api/shoes/brand/:brandname/size/:size', async function (req, res) {
    try {
        const {
            brandname,
            size
        } = req.params;
        if (brandname !== '' && brandname !== undefined &&
            size !== '' || size !== undefined) {
            let searchByBrandAndSize =
                await shoppingServie.findBybrandAndSize(brandname, size);
            res.json({
                status: "success",
                data: searchByBrandAndSize
            })
        } else {
            return false;
        }
    } catch (e) {
        res.json({
            

        })
    }
})

app.get('/api/delete/shoes');










