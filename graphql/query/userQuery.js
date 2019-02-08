var GraphQLList = require('graphql').GraphQLList;
var internet = require('faker').internet;
var random = require('faker').random;
var UserType = require('../schema/userSchema').UserType;

module.exports = {
    type: new GraphQLList(UserType),
    resolve: async () => {
        const users = await new Promise(resolve =>
            setTimeout(() =>
                resolve(new Array(10).fill(undefined).map(() => ({
                    id: random.uuid(),
                    email: internet.email(),
                }))), 100),
        );
        return users;
    },
};