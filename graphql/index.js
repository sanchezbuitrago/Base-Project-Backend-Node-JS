var GraphQLSchema = require('graphql').GraphQLSchema;
var GraphQLObjectType = require('graphql').GraphQLObjectType;
var userQueries = require('./query/userQuery');
var userMutations = require('./mutation/userMutation');
 
module.exports =  new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'query',
        fields: () => {
            return {
                getUser : userQueries,
            }
        },
    }),
    mutation: new GraphQLObjectType({
        name: 'mutation',
        fields: () => ({
            createUser : userMutations,
        }),
    }),
});