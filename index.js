// LOAD MODULES
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// LOAD DATA FILES
const _config = require('./data/config')
const _seo = require("./data/seo")
																		
// APP CONFIGURATION
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.use('/assets', express.static(__dirname + '/assets'));

// INDEX FILE
app.get('/', (req, res) => {
    res.render('pages/index', { _config, _seo });
});

// START WEBSERVER
app.listen(_config.website.port, () => {
    console.log('Server started on port 3000');
});
