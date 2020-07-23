const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost', // adresse du serveur
  user: 'root', // le nom d'utilisateur
  password: '9{i46j~VV', // le mot de passe
  database: 'portfolio', // le nom de la base de données
});
module.exports = connection;