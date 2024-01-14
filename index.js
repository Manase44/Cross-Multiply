const express = require('express')
const app = express()
const port = 3000

const routes = require('./logic')

app.set('view engine', 'ejs')
app.set('views' ,`${__dirname}`)
app.use(express.static('piblic'))
app.use(express.urlencoded({ extended: true }));
app.use('/', routes);

app.listen(port, () => {
    console.log(`Server running at port ${port}`);
});