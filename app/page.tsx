'use client';
import client from "../lib/client";
import { ApolloProvider } from '@apollo/client'
import Com from '../components/com'
import { NextPage } from 'next';
import React from "react";

const Page: NextPage = () => {
  return <>
    <ApolloProvider client={client}>
      <Com />
    </ApolloProvider>
  </>

}
export default Page