const resolvers = require('./resolvers');
const { makeExecutableSchema } = require('graphql-tools');

const usersAttr = `
    id: ID
    name: String!
    email: String!
    password: String!
`

const typeDefs = `
    type User {
       ${usersAttr}
    }

    input UserInput {
        ${usersAttr}
    }

    type Query {
        getUser(id: ID): User
        getUsers: [User]
    }

    type Mutation {
        CreateUser(input: UserInput): Boolean
    }
`

module.exports = makeExecutableSchema({ typeDefs, resolvers })