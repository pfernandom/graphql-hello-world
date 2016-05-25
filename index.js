/// <reference path="typings/index.d.ts" />
"use strict";
var graphql_1 = require('graphql');
var schema = new graphql_1.GraphQLSchema({
    query: new graphql_1.GraphQLObjectType({
        name: 'RootQueryType',
        fields: {
            hello: {
                type: graphql_1.GraphQLString,
                resolve: function () {
                    return 'world';
                }
            }
        }
    })
});
var query = '{ hello }';
graphql_1.graphql(schema, query).then(function (result) {
    // Prints
    // {
    //   data: { hello: "world" }
    // }
    console.log(result);
});
