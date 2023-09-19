import { useContext, useRef, useState } from "react"
import song from './assets/song.mp3'
import { ContextTheme } from "./App";


export const Audio = () => {
    const [musicPlay, setMusicPlay] = useState(true);
    const audioRef = useRef();
    const updateMusic = () => {
        setMusicPlay(!musicPlay)
        musicPlay ? audioRef.current.play() : audioRef.current.pause()
    }

    const theme = useContext(ContextTheme);

    const ThemeList = {
        color: theme ? 'brown' : 'white'
    }

    return(
        <div className="AudioUseRefStyle" >
        <h3 style={ThemeList} >Music player</h3>
        <audio src={song} loop='loop' ref={audioRef}></audio>
            <button onClick={() => updateMusic()}>{musicPlay? 'play' : 'pause'}</button>
        </div>
    )
}