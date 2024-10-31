

import React, { useEffect, useState } from 'react';

import MainHeading from './mainheading.page';

const openerpage = () => {
    const [visibleItems, setVisibleItems] = useState([false, false, false, false, false, false, false]);
    const [start, setStart] = useState(false);
    const [playSubmitSound, setPlaySubmitSound] = useState(false);

    useEffect(() => {
        if (start) {
            console.log('start', start);
            visibleItems.forEach((_, index) => {
                setTimeout(() => {
                    setVisibleItems(prev => {
                        const newState = [...prev];
                        newState[index] = true;

                        return newState;
                    });
                }, index * 1000);
            })
        }
    }, [start]);

    return (
        <div>
            {!visibleItems[0] && (<div className='grid grid-flow-row grid-flow-cols place-content-center h-screen' >
                <button onClick={() => { setStart(true); setPlaySubmitSound(true); }}>
                    <h1 className='updock-regular'> Hop on the journey cowboy!</h1>
                </button>
            </div>
            )}
            {!visibleItems[5] && (
                <div
                    className={`${visibleItems[0] ? 'block' : 'hidden'}`}>

                    {/* First image */}
                    <div
                        className={`z-50  img-main-cointainer ${visibleItems[4] ? 'visible' : 'invisible'}`}
                        style={{

                            display: visibleItems[4] ? 'block' : 'none'
                        }}
                    >
                        <img className='img-main'
                            src="https://i.pinimg.com/originals/b3/e2/2e/b3e22e164a207f353809d20dde261bb8.gif"
                        />
                    </div>

                    {/* Second set of images (grid) */}
                    <div className="flex z-0">
                        <div className="grid grid-flow-row grid-cols-4 z-0 main-grid">
                            {/* Second image */}
                            <div
                                className={`w-5/6 z-0 col-span-2 row-start-1 col-start-1 ${visibleItems[0] ? 'visible' : 'invisible'}`}
                                style={{ opacity: visibleItems[0] ? 1 : 0, }}
                            >
                                <img src="https://i.pinimg.com/originals/0b/5c/c0/0b5cc024841accd9a31a7b2daeb0e57b.gif" />
                            </div>

                            {/* Third image */}
                            <div
                                className={`w-4/6 m-1 z-10 col-start-2 col-span-2 row-start-2 ${visibleItems[1] ? 'visible' : 'invisible'}`}
                                style={{ opacity: visibleItems[1] ? 1 : 0 }}
                            >
                                <img src="https://i.pinimg.com/originals/8a/5c/a7/8a5ca787262d68c407f9f0c08410f016.gif" />
                            </div>
                            {/* Fourth image */}
                            <div
                                className={`w-4/6 m-1 z-30 row-start-3 }`}
                                style={{ opacity: visibleItems[3] ? 1 : 0, }}
                            >
                                <img src="https://i.pinimg.com/originals/f5/f2/74/f5f27448c036af645c27467c789ad759.gif" />
                            </div>
                            {/* Fifth image */}
                            <div
                                className={`w-4/6 m-1 z-20 col-start-3 row-start-3 ${visibleItems[2] ? 'visible' : 'invisible'}`}
                                style={{ opacity: visibleItems[2] ? 1 : 0, }}
                            >
                                <img src="https://i.pinimg.com/originals/6c/18/42/6c18426dc24560eefb233dd79019ca89.gif" />
                            </div>

                            {/* sixth image */}
                            <div
                                className={`w-4/6 m-1 z-30 ${visibleItems[3] ? 'visible' : 'invisible'}`}
                                style={{ opacity: visibleItems[3] ? 1 : 0, }}
                            >
                                <img src="https://i.pinimg.com/originals/46/96/88/469688385704ca1acde40f62c3edd322.gif" />
                            </div>


                        </div>
                    </div>

                    {/* seventh image */}
                    <div
                        className={`z-30 img-left  ${visibleItems[1] ? 'visible' : 'invisible'}`}
                        style={{
                            opacity: visibleItems[1] ? 1 : 0,
                        }}
                    >
                        <img className="h-96" src="https://i.pinimg.com/originals/41/48/03/414803605983332e92e9a9d937707bff.gif" />

                    </div>

                </div>

            )}
            {visibleItems[5] && (<MainHeading />)}
        </div>

    );
}


export default openerpage;