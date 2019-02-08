var GraphQLNonNull = require('graphql').GraphQLNonNull;
var random = require('faker').random;
var UserType = require('../schema/userSchema').UserType;
var UserInputType = require('../schema/userSchema').UserInputType;


module.exports = {
    type: UserType,
    args: {
        input: {
            type: new GraphQLNonNull(UserInputType),
        },
    },
    resolve: async (rootValue, { input }) => {
        if (!isEmail(input.email)) {
            throw new Error('The email is not in a valid format');
        }
        const result = await new Promise((resolve) => {
            setTimeout(() =>
                resolve(Object.assign(input, {
                    id: random.uuid(),
                })), 100);
        });
        return result;
    },
};