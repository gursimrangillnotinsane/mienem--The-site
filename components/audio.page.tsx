import React, { useRef, useEffect } from "react";

export default function AudioPlayer(props: { play: unknown; onFinish: () => void; src: string | undefined; }) {
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        if (props.play) {
            playAudio();
        }
    }, [props.play]);

    const playAudio = () => {
        if (audioRef.current) {
            // Set the start time first, then play the audio
            audioRef.current.currentTime = 18.5;
            audioRef.current.muted = false;
            audioRef.current.play().catch(error => {
                console.error("Playback error:", error); // Handle errors in case playback is blocked
            });
        }
    };

    const handleAudioEnded = () => {
        // Call the callback function when the audio ends
        if (props.onFinish) {
            props.onFinish();
        }
    };

    return (
        <div>
            <audio ref={audioRef} autoPlay loop muted onEnded={handleAudioEnded}>
                <source src={props.src} type="audio/mp3" />
                Your browser does not support the audio element.
            </audio>
        </div>
    );
}
