const knexfile = require('../knexfile')
const knex = require('knex')(knexfile)

module.exports = knex

// knex('users').insert({
//     name: 'Teste',
//     email: 'teste@test.com.br',
//     password: 'teste'
// }).then(data => console.log(data))

knex('users').select('*').then(res => console.log(res))