// Importar dependencias
const express = require('express');
const path = require('path')
const pages = require('./pages.js')

// Iniciando o Express 
const server = express();
server
  //utilizar body do req
  .use(express.urlencoded({ extended: true }))
  //utilizando os arquivos estáticos
  .use(express.static('public'))

  //configurar template engine
  .set('views', path.join(__dirname, "views"))
  .set('view engine', 'hbs')

  //criando rota 
  .get('/', pages.index)
  .get('/orphanage', pages.orphanage)
  .get('/orphanages', pages.orphanages)
  .get('/create-orphanage', pages.createOrphanage)
  .post('/save-orphanage', pages.saveOrphanage)
  
// Ligar o server
server.listen(5500); 