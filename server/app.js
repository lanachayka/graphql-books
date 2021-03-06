const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

//allow cross-origin requests
app.use(cors());

//connect to mlab database
mongoose.connect(`mongodb+srv://lana:lana@books.rxov8.mongodb.net/test`);
mongoose.connection.once('open', ()=> {
    console.log('connected to database');
})

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}));

app.listen(4000, ()=>{
    console.log('now listening for requests on port 4000');
});
