let express = require('express');
let cors = require('cors');
let bodyParser = require('body-parser');

const ingredientsRoute = require('./routes/ingredients.routes')

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());
app.use('/', ingredientsRoute)


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log('Connected to port ' + port)
})

app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});