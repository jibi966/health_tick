require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 4000;

app.set('trust proxy', true);
app.use(express.json());
app.use(cors());

// app.use('/login', loginRoute);

app.get('/aaa', (req, res) => {
    return res.send({welcome: 'home'})
})

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use(function (err, _req, res, _next) {
    console.error(err.message, err.stack);
    res.status(500).send({success: false, error: err.message});
});

app.listen(PORT, async () => {
    try {
        // await connectdb();
        console.log('Listening on port', PORT);
    } catch (error) {
        console.error(error);
    }
});
