const express = require("express");
const app = express();

const bookRouter = require("./routes/books.route");
const userRouter = require("./routes/users.route");
const transactionRouter = require("./routes/transations.route");

const port = 8000;
app.set('views', './views');
app.set('view engine', 'pug');

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencode
app.use(express.static("public"));
app.use("/books", bookRouter);
app.use("/users", userRouter);
app.use("/transactions", transactionRouter);

app.get('/', (req, res) => {
    res.render("index")
});

app.listen(port, () => {
    console.log("sever start at port " + port);
})