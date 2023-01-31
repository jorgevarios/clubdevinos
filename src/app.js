const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.set('views', path.join(__dirname, '../views'))
app.set('view engine', 'ejs')


const productsRouter = require('./routes/productsRouter');
app.use("/products",productsRouter);

const mainRoutes = require('./routes/mainRoutes');
app.use("/", mainRoutes);

app.listen(3000, () => {
console.log("Servidor corriendo en puerto 3000")
});



