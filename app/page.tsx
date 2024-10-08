'use client';
import client from "../lib/client";
import { ApolloProvider } from '@apollo/client'
import Openerpage from '../components/opener.page'
import { NextPage } from 'next';
import React from "react";

const Page: NextPage = () => {
  return <>
    <div className="p-3">

      <ApolloProvider client={client}>
        <Openerpage />
      </ApolloProvider>
    </div>
  </>

}
export default Page