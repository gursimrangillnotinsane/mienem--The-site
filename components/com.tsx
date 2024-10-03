import { useQuery, gql } from '@apollo/client'
import { NextPage } from 'next';
const query = gql`
query Entries {
  entries {
    title
    price
    image
  }
}
`;


const Com: NextPage = () => {
  const { loading, error, data } = useQuery(query);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>THIS</h1>

    </div>
  );
};

export default Com;