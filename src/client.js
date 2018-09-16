import React from 'react';
import { ApolloProvider } from 'react-apollo';

// import ApolloClient from 'apollo-client';
import ApolloClient from 'apollo-boost';
// import { ApolloLink } from 'apollo-link';
// import { createHttpLink } from 'apollo-link-http';
// import { InMemoryCache } from 'apollo-cache-inmemory';
// import { hasSubscription } from '@jumpn/utils-graphql';
// import { fetch } from 'whatwg-fetch';
// import * as fetch from 'cross-fetch';
import fetch from 'isomorphic-fetch'; //eslint-disable-line
// import absintheSocketLink from './socket'; //eslint-disable-line

const client = new ApolloClient({ uri: 'https://fakerql.com/graphql', fetch });


// const CreateApolloClient = (idToken: string) => {
//   const httpLink = ApolloLink.split(
//     operation => hasSubscription(operation.query), absintheSocketLink,
//     createHttpLink({ uri: '/api/graphql', fetch }),
//   );
//   const middlewareLink = new ApolloLink((operation, forward) => {
//     operation.setContext({
//       headers: {
//         authorization: idToken ? `Bearer ${idToken}` : null,
//         operating_org: localStorage.getItem('operating_org_id') || null,
//       },
//     });
//     return forward(operation);
//   });
//   /* eslint-disable */
//   const clientToReturn = new ApolloClient({
//     link: middlewareLink.concat(httpLink),
//     cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
//   });
//   /* eslint-enable */
//   return clientToReturn;
// };
export default ({ children }) => (<ApolloProvider client={client}>{children}</ApolloProvider>);
