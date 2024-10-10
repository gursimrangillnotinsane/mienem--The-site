import React, { useRef, useEffect, useState } from "react";
import { useQuery, gql } from '@apollo/client'
import { NextPage } from 'next';
import AudioPlayer from "./audio.page";
const query = gql`
query Entries {
  entries {
    title
    price
    image
  }
}
`;


const mainheading: NextPage = () => {
  return (
    <div>
      <h1>MIENEM</h1>


    </div>
  );
};

export default mainheading;