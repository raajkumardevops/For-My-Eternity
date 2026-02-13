import { useEffect, useRef } from "react";
import loveMusic from "../assets/music/metro proposal.MP3"

const MusicPlayer = ({ play }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (!audioRef.current) return;

    if (play) {
      audioRef.current.volume = 0;
      audioRef.current.play();

      // Fade in music
      let vol = 0;
      const fade = setInterval(() => {
        if (vol < 0.3) {
          vol += 0.02;
          audioRef.current.volume = vol;
        } else {
          clearInterval(fade);
        }
      }, 200);
    }
  }, [play]);

  return (
    <audio ref={audioRef} loop>
      <source src={loveMusic} type="audio/mpeg" />
    </audio>
  );
};

export default MusicPlayer;
