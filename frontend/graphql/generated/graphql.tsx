import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
};

export type Mutation = {
  __typename?: 'Mutation';
  createDraft: Post;
  publish?: Maybe<Post>;
};

export type MutationCreateDraftArgs = {
  title: Scalars['String'];
  body: Scalars['String'];
};

export type MutationPublishArgs = {
  draftId: Scalars['Int'];
};

export type Post = {
  __typename?: 'Post';
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['Date']>;
};

export type Query = {
  __typename?: 'Query';
  drafts: Array<Maybe<Post>>;
  posts?: Maybe<Array<Maybe<Post>>>;
};

export type AllDraftsQueryVariables = Exact<{ [key: string]: never }>;

export type AllDraftsQuery = { __typename?: 'Query' } & {
  drafts: Array<Maybe<{ __typename?: 'Post' } & Pick<Post, 'id' | 'title' | 'body'>>>;
};

export type AllPostsQueryVariables = Exact<{ [key: string]: never }>;

export type AllPostsQuery = { __typename?: 'Query' } & {
  posts?: Maybe<
    Array<Maybe<{ __typename?: 'Post' } & Pick<Post, 'id' | 'title' | 'body'>>>
  >;
};

export type CreateDraftMutationVariables = Exact<{
  title: Scalars['String'];
  body: Scalars['String'];
}>;

export type CreateDraftMutation = { __typename?: 'Mutation' } & {
  createDraft: { __typename?: 'Post' } & Pick<
    Post,
    'id' | 'title' | 'body' | 'published'
  >;
};

export const AllDraftsDocument = gql`
  query AllDrafts {
    drafts {
      id
      title
      body
    }
  }
`;

/**
 * __useAllDraftsQuery__
 *
 * To run a query within a React component, call `useAllDraftsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllDraftsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllDraftsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllDraftsQuery(
  baseOptions?: Apollo.QueryHookOptions<AllDraftsQuery, AllDraftsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AllDraftsQuery, AllDraftsQueryVariables>(
    AllDraftsDocument,
    options
  );
}
export function useAllDraftsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AllDraftsQuery, AllDraftsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AllDraftsQuery, AllDraftsQueryVariables>(
    AllDraftsDocument,
    options
  );
}
export type AllDraftsQueryHookResult = ReturnType<typeof useAllDraftsQuery>;
export type AllDraftsLazyQueryHookResult = ReturnType<typeof useAllDraftsLazyQuery>;
export type AllDraftsQueryResult = Apollo.QueryResult<
  AllDraftsQuery,
  AllDraftsQueryVariables
>;
export const AllPostsDocument = gql`
  query AllPosts {
    posts {
      id
      title
      body
    }
  }
`;

/**
 * __useAllPostsQuery__
 *
 * To run a query within a React component, call `useAllPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllPostsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllPostsQuery(
  baseOptions?: Apollo.QueryHookOptions<AllPostsQuery, AllPostsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AllPostsQuery, AllPostsQueryVariables>(
    AllPostsDocument,
    options
  );
}
export function useAllPostsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AllPostsQuery, AllPostsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AllPostsQuery, AllPostsQueryVariables>(
    AllPostsDocument,
    options
  );
}
export type AllPostsQueryHookResult = ReturnType<typeof useAllPostsQuery>;
export type AllPostsLazyQueryHookResult = ReturnType<typeof useAllPostsLazyQuery>;
export type AllPostsQueryResult = Apollo.QueryResult<
  AllPostsQuery,
  AllPostsQueryVariables
>;
export const CreateDraftDocument = gql`
  mutation createDraft($title: String!, $body: String!) {
    createDraft(title: $title, body: $body) {
      id
      title
      body
      published
    }
  }
`;
export type CreateDraftMutationFn = Apollo.MutationFunction<
  CreateDraftMutation,
  CreateDraftMutationVariables
>;

/**
 * __useCreateDraftMutation__
 *
 * To run a mutation, you first call `useCreateDraftMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDraftMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDraftMutation, { data, loading, error }] = useCreateDraftMutation({
 *   variables: {
 *      title: // value for 'title'
 *      body: // value for 'body'
 *   },
 * });
 */
export function useCreateDraftMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateDraftMutation,
    CreateDraftMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateDraftMutation, CreateDraftMutationVariables>(
    CreateDraftDocument,
    options
  );
}
export type CreateDraftMutationHookResult = ReturnType<typeof useCreateDraftMutation>;
export type CreateDraftMutationResult = Apollo.MutationResult<CreateDraftMutation>;
export type CreateDraftMutationOptions = Apollo.BaseMutationOptions<
  CreateDraftMutation,
  CreateDraftMutationVariables
>;
