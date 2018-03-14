/**
 * Arquivo: server.js
 * Descrição: Arquivo responsável por levantar o serviço do Node.Js para poder
 * executar a aplicação e a API através do Express.Js.
 * Author: Eddy Francisco
 * Data de Criação: 14/04/2018
 */

 //Base do Setup da Aplicação:

 /* Chamada das Packages que iremos precisar para a nossa aplicação */
var express     = require('express'); //chamando o pacote express
var app         = express(); //definção da nossa aplicação através do express
var bodyParser  = require('body-parser');  //chamando o pacote body-parser

/** Configuração da variável 'app' para usar o 'bodyParser()'.
 * Ao fazermos isso nos permitirá retornar os dados a partir de um POST
 */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/** Definição da porta onde será executada a nossa aplicação */
var port = process.env.PORT || 8000;

//Rotas da nossa API:
//==============================================================
 
/* Aqui o 'router' irá pegar as instâncias das Rotas do Express */
var router  = express.Router(); 
 
/* Rota de Teste para sabermos se tudo está realmente funcionando (acessar através: GET: http://localhost:8000/api) */
router.get('/', function(req, res) {
    res.json({ message: 'FUCK YEAH! Seja Bem-Vindo a nossa API' });
});
 
/* TODO - Definir futuras rotas aqui!!! */
 
/* Todas as nossas rotas serão prefixadas com '/api' */
app.use('/api', router);
 
//Iniciando o Servidor (Aplicação):
//==============================================================
app.listen(port);
console.log('Iniciando a aplicação na porta ' + port);

//Configuração Base da Aplicação:
//====================================================================================

var mongoose = require('mongoose'); 
 
mongoose.connect('mongodb://root:1234@ds215089.mlab.com:15089/node-api');