import React, { useRef, useEffect, useState } from "react";
import { useQuery, gql } from '@apollo/client'
import { NextPage } from 'next';
import AudioPlayer from "./audio.page";
import Goodreads from "./mainpage.goodreads.page";
import MainpageSpotify from "./mainpage.spotify.page";
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
    <div className="h-screen flex px-40	">
      <div className="container ">
        {/* first row */}
        <div className="header flex justify-between">
          <img src="/header.png" alt="logo" />
          <img src="https://i.pinimg.com/564x/eb/6f/39/eb6f393a36dea120ba4668f6bb0b98f2.jpg" alt="logo" />
        </div>
        <div className="headertwo">
          <img src="/poster.png" alt="logo" />
        </div>

        {/* second row */}
        <div className="name">
          <h1>MIENEM</h1>
          <p>an online persona</p>
        </div>
        <div className="links">
          <div className="flex justify-around pt-6">
            <img src="/linksPics/anime.png" alt="anime" />
            <img src="/linksPics/books.png" alt="books" />
            <img src="/linksPics/films.png" alt="films" />
            <img src="/linksPics/projects.png" alt="projects" />
          </div>
        </div>

        {/* third row */}
        <div className="sideimg">
          <img src="/sideimg.png" alt="logo" />
        </div>
        <div className="aboutme">
          <div className="flex  flex-col">
            <h2 className="textBack">"I am a cage, in search of a bird." </h2>
            <p className="self-end">- Franz Kafka</p>
            <p>
              19, he/him, someone who loves literally anything, esfj, will be found online most of the time doing silly things . Can’t decide their favourites in any form of media. Does NOT exists anywhere else but online.
            </p>
          </div>
        </div>
        <div className="spotify">
          <MainpageSpotify />
        </div>
        {/* fourth row */}
        <div className="sideme">
          <div className="textBack">
            <p>
              I like watching peaceful anime and playing chaotic games .My music taste is all over the place but lately I am enjoying R&B, hip-hop and shorgaze.
            </p>
          </div>
        </div>
        <div className="imgeyes">
          <img className="header2img" src="/footer.png" alt="logo" />
          <Goodreads />
        </div>
        <div className="linkstwo">
          <div className="linksInner">
            <h2>Links</h2>

            <li>
              <a href="https://open.spotify.com/user/9wx4giipe7cxv4t8cqe7h7lrq" target="_blank" className="hover:text-green-800 hover:underline">spotify</a>
            </li>
            <li>
              <a href="https://anilist.co/user/Mienem/" target="_blank"
                className="hover:text-slate-900 hover:underline">anilist</a>
            </li>
            <li>
              <a href="https://discordid.netlify.app/?id=1252617409622442099" target="_blank"
                className="hover:text-blue-500 hover:underline">discord</a>
            </li>
            <li>
              <a href="https://ca.pinterest.com/gursimranGillll/" target="_blank"
                className="hover:text-red-500 hover:underline">pinterest</a>
            </li>
            <li>
              <a href="https://www.goodreads.com/user/show/182786831-mienem" target="_blank"
                className="hover:text-yellow-500 hover:underline">goodreads</a>
            </li>


          </div>
        </div >
      </div>
    </div>
  );
}

export default mainheading;

