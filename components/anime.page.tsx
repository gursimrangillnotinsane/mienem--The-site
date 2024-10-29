"use client";
import { useQuery, gql } from '@apollo/client'
import { NextPage } from 'next';
import { useEffect, useState } from 'react';


const anime: NextPage = () => {
  const [type, setType] = useState('MANGA');
  const [status, setStatus] = useState('CURRENT');
  const ANIMEQUERY = gql`
 query ($type: MediaType,$status: MediaListStatus){
   MediaListCollection(userName: "mienem",type: $type,status: $status) {
    user {
      avatar {
        medium
      }
    }
    lists {
      entries{
        media {
          
          coverImage {
            medium
            color
          }
          title {
            english
          }
          siteUrl
        }
        id
      }
    }
  }
}
`
  const { loading, error, data } = useQuery(ANIMEQUERY, { variables: { type, status } });


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  console.log('Fetched anime data:', data);
  return (
    <div className='flex h-screen flex-col	'>
      <div>
        <p>anime is somethinbj ashg kjshf vkjadbfvkjdsfhvj bdfjv bdkjfv kdfj</p>
      </div>
      <div className='flex justify-center  '>
        <div className='self-center p-5 cursor-pointer'>
          <h1 onClick={() => setType('ANIME')} style={{ color: type === 'ANIME' ? 'black' : '#49424285' }} >ANIME</h1> <br />
          <h1 onClick={() => setType('MANGA')} style={{ color: type === 'MANGA' ? 'black' : '#49424285' }}>MANGA</h1>
        </div>
        <div className='overflow-auto m-8 p-6 ' style={{ maxHeight: '85vh', backgroundColor: '#c6c6b357' }}>
          {data.MediaListCollection.lists.map((list: any) => (
            <div>
              <h2 >{list.status}</h2>



              <div className='grid grid-cols-10 auto-rows-max my-3' key={list.entries.id}>
                {list.entries.map((entry: any) => (
                  <div key={list.entries.id}>
                    <img className='m-1 ' style={{ width: '85%' }} src={entry.media.coverImage.medium} />
                    <p> {entry.media.title.english}</p>
                  </div>
                ))}

              </div>
            </div>
          ))}
        </div>
      </div>



    </div>)

}

export default anime;