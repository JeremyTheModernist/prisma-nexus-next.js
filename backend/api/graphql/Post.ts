import {objectType, extendType, asNexusMethod, nonNull, stringArg, blocks, booleanArg, intArg, arg} from 'nexus';
// import {GQLDate} from './scalars/Date'
// https://nexusjs.org/docs/api/scalar-type
import { GraphQLDate } from 'graphql-iso-date'
// the context is your Prisma Client instance
// this will give you all of the Prisma API autocompletion
import { context } from '../context';
export const GQLDate = asNexusMethod(GraphQLDate, 'date')

export const Post = objectType({
    name: 'Post',
    // where t represents the Post type definition and graphql schema
    // in the definition this will define the t, or Post, fields and the types of both the type definition + the SDL
    definition(t) {
        t.int('id')
        t.string('title')
        t.string('body')
        t.boolean('published')
        t.date('createdAt')
    }
})

// collocation of mutation 
export const PostMutation = extendType({
    type: 'Mutation',
    // where t represents the Mutation type in SDL
    definition(t){
        // where field represents a field in the Mutation type
        t.nonNull.field('createDraft', {
            type: Post,
            // define the arg types, so it can compile these types ahead of time
            args: {
                title: nonNull(stringArg()),
                body: nonNull(stringArg())
            },
            resolve: (parent,args,ctx,info) => {
                const draft = {
                    title: args.title,
                    body: args.body,
                    published: false,
                    createdAt: new Date(Date.now())
                }
                return context.db.post.create({
                    data: draft
                });
            }
        }),
        t.field('publish', {
            type: Post,
            args: {
                draftId: nonNull(intArg()),
            },
            resolve: (source,args,context,info) => {
                return context.db.post.update({
                    where: {
                        id: args.draftId
                    },
                    data: {
                        published: true
                    }
                })
            }
        })
    }
})

// The Query object is a central place in your schema where many other types will appear. Like before with the modular GraphQL types decision we again can decide to be modular here. We could either create a new api/graphql/Query.ts module (not modular), or we could collocate the exposure of Post object with its definition in api/graphql/Post.ts (modular). Staying consistent with before, we'll take the modular way.
export const PostQuery = extendType({
    type: 'Query',
    definition(t){
        // where t represent Query schema + type definition and t.field represents a field on the Query type
        t.nonNull.list.field('drafts', {
            type: Post,
            resolve: (parent, args,context,info) => {
                return context.db.post.findMany({
                    where: {
                        published: false
                    }
                })
            }
        }),
        t.list.field('posts', {
            type: 'Post',
            resolve: (source,args,context,info) => {
                return context.db.post.findMany({
                    where: {
                        published: true
                    }
                })
            }
        })
    }
})