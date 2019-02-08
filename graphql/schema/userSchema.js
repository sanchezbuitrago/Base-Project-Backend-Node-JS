var GraphQLString = require('graphql').GraphQLString;
var GraphQLID = require('graphql').GraphQLID;
var GraphQLInputObjectType = require('graphql').GraphQLInputObjectType;
var GraphQLObjectType = require('graphql').GraphQLObjectType;
  
const UserType = new GraphQLObjectType({
    name: 'UserType',
    description: 'User type definition',
    fields: () => ({
        id: {
        type: GraphQLID,
        },
        email: {
        type: GraphQLString,
        },
    }),
});
  
const UserInputType = new GraphQLInputObjectType({
    name: 'UserInputType',
    description: 'User payload definition',
    fields: () => ({
        email: {
        type: GraphQLString,
        },
    }),
});
  
module.exports = {
    UserType,
    UserInputType,
};