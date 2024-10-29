import { HttpLink, InMemoryCache, ApolloClient } from "@apollo/client";

export const getClient = new ApolloClient({
    uri: 'https://graphql.anilist.co',
    cache: new InMemoryCache(),
})
