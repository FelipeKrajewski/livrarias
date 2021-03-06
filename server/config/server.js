/**Carregando modulos */
const express = require('express')
const bodyParser = require('body-parser')
const routes = require ('./routes.js')

const app = express();


//Configurar a conversão das informações que chegam em uma requisição
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Configurar arquivo de rotas
app.use('/', routes);

//Definir a porta que o servidor vai escutar
const port = 1234;
//Configurando o servidor para escutar a porta definida
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});