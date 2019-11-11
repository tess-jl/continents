// Load Environment Variables from the .env file
require('dotenv').config();

// Application Dependencies
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const pg = require('pg');

// Database Client
const Client = pg.Client;
const client = new Client(process.env.DATABASE_URL);
client.connect();

// Application Setup
const app = express();
const PORT = process.env.PORT;
app.use(morgan('dev')); // http logging
app.use(cors()); // enable CORS request
app.use(express.static('./public')); // server files from /public folder
app.use(express.json());

// API Routes

app.get('/api/continents', async(req, res) => {


    try {
        const result = await client.query(`
        SELECT
            c.*,
            h.name as hemisphere
            FROM continents c
            JOIN hemispheres h
            ON c.hemisphere_id = h.id
            ORDER BY c.num_countries;
        `);

        res.json(result.rows);

    }    
    catch (err) {
        res.status(500).json({
            error: err.message || err
        });
    }
});

app.post('/api/continents', async(req, res)=> {
    const continent = req.body;

    try {
        const result = await client.query(`
            INSERT INTO continents (name, hemiphere_id, img, num_countries, fifty_plus_countries)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *;
        `,
        [continent.name, continent.hemisphere_id, continent.img, continent.num_countries, continent.fifty_plus_countries]
        );

        res.json(result.rows);
    }
    catch (err) {
        res.status(500).json({
            error: err.message || err
        });
    }

});

app.get('/api/hemispheres', async(req, res) => {
    try {
        const result = await client.query(`
        SELECT * 
        FROM hemispheres
        ORDER BY name; 
        `);

        res.json(result.rows);
    }
    catch (err) {
        res.status(500).json({
            error: err.message || err
        });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log('server running on PORT', PORT);
});