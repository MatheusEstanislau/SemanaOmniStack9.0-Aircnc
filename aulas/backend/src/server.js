const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://OmniStack:ame@cluster0-8pxjy.mongodb.net/semana09?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// GET, POST, PUT, DELETE
// req.query = Acessar query params(para filtros)
// req.params = Acessar rout params (para edição, delete)
// req.body = Acessar corpo da requisição (para criação, edição)
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
