import { gql, useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { useAllDraftsQuery } from '../graphql/generated/graphql';

type Props = {
  name: string;
  children: React.ReactNode;
};

// type drafts = {
//   drafts: {
//     id: number;
//     title: string;
//     body: string;
//   }[]
// }

// const GET_DRAFTS = gql`
//   query{
//   drafts{
//     id
//     title
//     body
//   }
// }
// `

export default function Home() {
  const { loading, error, data } = useAllDraftsQuery();
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  });
  if (!isMounted) return null;
  if (loading) return <div>loading</div>;
  if (error) return <div>error</div>;
  return (
    <div>
      <h1>Next.js with Prisma and Nexus!</h1>
      <ul>
        {data.drafts.map((draft) => (
          <li key={draft.id}>
            <h2>{draft.title}</h2>
            <p>{draft.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
