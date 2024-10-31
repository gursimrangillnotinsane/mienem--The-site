'use client';
import client from "../../mienem_api/lib/client";
import { ApolloProvider } from '@apollo/client'
import Openerpage from '../components/opener.page'
import MainHeading from '../components/mainheading.page'
import { NextPage } from 'next';
import React from "react";
import { Main } from "next/document";

const Page = () => {
  return <>
    <div>


      {/* <Openerpage /> */}
      <MainHeading />
    </div>
  </>

}
export default Page