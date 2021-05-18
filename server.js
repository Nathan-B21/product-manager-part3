const express = require("express")
const app = express();
const port = 8000;
const cors = require("cors");


app.use(cors());
app.use(express.json()); //allows us to use json
app.use(express.urlencoded({extended: true}));
app.use(cors());

//^^^^ keep those defined at the top before the requires for config and routes

//require our other modualrized files (routes and config)
require("./server/config/products.config")
require("./server/routes/product.routes")(app)


app.listen(port, () => console.log(`Listening on port ${port}`));