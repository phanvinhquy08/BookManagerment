const express = require("express");
const app = express();
const cookieParser = require('cookie-parser')

const bookRouter = require("./routes/books.route");
const userRouter = require("./routes/users.route");
const transactionRouter = require("./routes/transations.route");
const authRouter = require("./routes/auth.route")

const port = 8000;
app.set('views', './views');
app.set('view engine', 'pug');

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencode
app.use(express.static("public"));
app.use(cookieParser())

app.use("/books", bookRouter);
app.use("/users", userRouter);
app.use("/transactions", transactionRouter);
app.use("/auth", authRouter);

app.get('/', (req, res) => {
    res.render("index")
});

app.listen(port, () => {
    console.log("sever start at port " + port);
})