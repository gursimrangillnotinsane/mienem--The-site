

import MainpageSpotify from "./mainpage.spotify.page";


const mainheading = () => {
  return (
    <div className="h-screen flex justify-center px-1 sm:px-64">
      <div className="container ">
        {/* first row */}
        <div className="header flex sm:justify-between ">
          <img src="/header.png" alt="logo" />
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
            {/* <Link href="/anime"> */}
            <img src="/linksPics/anime.png" alt="anime" />
            {/* </Link> */}
            {/* <Link href="/books"> */}
            <img src="/linksPics/books.png" alt="books" />
            {/* </Link> */}
            {/* <Link href="/films"> */}
            <img src="/linksPics/films.png" alt="films" />
            {/* </Link>
            <Link href="/projects"> */}
            <img src="/linksPics/projects.png" alt="projects" />
            {/* </Link> */}
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

              19, he/him, esfj, someone who loves literally anything, will be found online most of the time doing silly things . Can’t decide their favourite in any form of media.
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
              I like watching peaceful anime and playing chaotic games .My music taste is all over the place but lately I am enjoying R&B, hip-hop and shoegaze. I enjoy reading classic fiction books. I love RDR2 so much and prefer rpg games over any.
            </p>
          </div>
        </div>
        <div className="linkstwo">
          <div className="linksInner">
            <div>
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
            <div>
              <img src="https://i.pinimg.com/564x/67/29/93/672993ae01e093d6faea40fd64b3eed8.jpg"></img>
            </div>

          </div>
        </div >
      </div>
    </div>
  );
}

export default mainheading;

