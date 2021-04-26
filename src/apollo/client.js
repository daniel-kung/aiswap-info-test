import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'

export const client = new ApolloClient({
  link: new HttpLink({
    // uri: 'https://api.thegraph.com/subgraphs/name/pancakeswap/exchange',
    uri: 'http://13.229.91.62:8000/subgraphs/name/davekaj/uniswap/graphql',
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})

export const healthClient = new ApolloClient({
  link: new HttpLink({
    // uri: 'https://api.thegraph.com/index-node/graphql',
    uri: 'https://api.thegraph.com/index-node/graphql',
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})

export const blockClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.thegraph.com/subgraphs/name/pancakeswap/blocks',
    // uri: 'http://13.229.91.62:8000/subgraphs/name/davekaj/uniswap/graphql',
  }),
  cache: new InMemoryCache(),
})
