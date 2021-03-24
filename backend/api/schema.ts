import {makeSchema} from 'nexus'
import {join} from 'path'
import * as types from './graphql'

// Generating TypeScript types to give your resolvers complete type safety
// Generating an SDL file
// this will be used as your typeDefs + resolvers schema in Apollo
export const schema = makeSchema({
    types,
    // outputs types and schema to root folder
    outputs: {
        typegen: join(__dirname, '..', 'nexus-typegen.ts'),
        schema: join(__dirname, '..', 'schema.graphql')
    },
    // path to the context file
    contextType: {
        module: join(__dirname, './context.ts'),
        export: "Context"
    },
    // this is called during the build process to ensure that nexus exits after it generates
    // the SDL and typedefs artifacts
    shouldExitAfterGenerateArtifacts: Boolean(
        process.env.NEXUS_SHOULD_EXIT_AFTER_REFLECTION,
      ),
})

