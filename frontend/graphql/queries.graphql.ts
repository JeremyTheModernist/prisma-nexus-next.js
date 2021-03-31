import {gql} from '@apollo/client'

export const AllDraftsQuery = gql`
  query AllDrafts{
  drafts{
    id
    title
    body
  }
}
`

export const AllPostsQuery = gql`
  query AllPosts{
  posts{
    id
    title
    body
  }
}
`

export const createDraftMutation = gql`
mutation createDraft($title: String!, $body: String!){
  createDraft(title:$title, body: $body){
    id
    title
    body
    published
  }
}
`