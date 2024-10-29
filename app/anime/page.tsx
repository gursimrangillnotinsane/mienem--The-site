"use client";
import { NextPage } from 'next';
import { ApolloProvider } from '@apollo/client'
import { getClient } from '../../lib/anilist'
import Anime from '../../components/anime.page'



const AnimePage: NextPage = () => {
  console.log("d");
  return (
    <ApolloProvider client={getClient}>
      <Anime />
    </ApolloProvider>
  )
}

export default AnimePage;
