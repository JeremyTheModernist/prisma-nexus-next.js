import '../styles/globals.css'
import Nav from '../components/Nav'

import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client'

const client = new ApolloClient({
  uri: 'http://localhost:4001/',
  cache: new InMemoryCache(),
  ssrMode: false
})


function MyApp({ Component, pageProps }) {
  return <ApolloProvider client={client}>
    <Nav/>
    <Component {...pageProps} />
  </ApolloProvider>
}

export default MyApp
