const express = require("express");
const app = express();
const path = require("path");
const session = require("express-session");

app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.set('views', path.join(__dirname, '../views'))
app.set('view engine', 'ejs')

app.use(session({secret: 'Secreto!!!'}));


const productsRouter = require('./routes/productsRouter');
app.use("/products",productsRouter);

const mainRoutes = require('./routes/mainRoutes');

const usersRouter = require('./routes/usersRouter');
app.use('/users', usersRouter);

app.listen(3000, () => {
console.log("Servidor corriendo en puerto 3000")
});



