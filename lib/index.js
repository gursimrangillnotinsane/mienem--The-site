import { HttpLink, InMemoryCache, ApolloClient } from "@apollo/client";

export const getClient = (() => {
    return new ApolloClient({
        cache: new InMemoryCache(),
        link: new HttpLink({
            uri: "https://countries.trevorblades.com",
        }),
    });
});
