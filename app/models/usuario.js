/**
 * Arquivo: usuario.js
 * Author: Eddy Francisco
 * Description: Arquivo onde trataremos o modelo do projeto.
 * Definição dos esquemas para serem utilizadas na Base de Dados (MongoDb)
 * Data: 14/03/2018
 */
 
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 
var UsuarioSchema = new Schema({
    nome: String,
    login: String,
    senha: String
});
 
module.exports = mongoose.model('Usuario', UsuarioSchema);