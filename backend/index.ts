import {ApolloServer} from 'apollo-server'
import {schema} from './api/schema';
import {context, Context} from './api/context'

// pass the prisma context in here so your API can access it for db operations
const server = new ApolloServer({schema, context});
// port is defined by Heroku
const port = process.env.PORT || 4001

server.listen({
  port
}).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`)
  })

  // the --transpile-only means ts-node won't type check your app when it runs it. necessary to avoid type errors at run time.