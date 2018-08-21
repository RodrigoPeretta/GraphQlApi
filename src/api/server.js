const express = require('express')
const graphlHTTP = require('express-graphql')
const { buildSchema } = require('graphql')
const schema = require('./schema')

const app = express()
app.use('/api', graphlHTTP({
    schema,
    graphiql: true
}))

app.listen(4000, () => console.log('running...'));