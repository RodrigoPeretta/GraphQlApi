const db = require('../config/database')

module.exports = {
    Query: {
        async getUser(_, { id }) {
            return await db('users').where({ id }).first()
        },
        async getUsers(){
            return await db('users')
        }
    },
    Mutation: {
        async CreateUser(_, { input }) {
            return await db('users').insert({
                name: input.name,
                email: input.name,
                password: input.password
            })
        }
    }
}