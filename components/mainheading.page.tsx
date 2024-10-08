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
    const [playSubmitSound, setPlaySubmitSound] = useState(false);
    return (
        <div>
            <h1>MIENEM</h1>
            <AudioPlayer
                src="../resource/favicon.ico"
                play={playSubmitSound}
                onFinish={() => setPlaySubmitSound(false)}
            />
            <button onClick={() => setPlaySubmitSound(true)}>sound</button>;
        </div>
    );
};

export default mainheading;