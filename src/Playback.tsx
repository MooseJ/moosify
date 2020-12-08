import { useAuth } from "auth/auth";
import { useEffect, useMemo, useState } from "react";
import SpotifyWebApi from 'spotify-web-api-js';
import { FaBackward, FaForward, FaPlay, FaPause } from "react-icons/fa";
import { millisToMinutesAndSeconds } from "utils/timeFormatter";

const Playback = () => {
  const auth = useAuth();
  if(!auth.isAuthorized) {
    auth.authorize();
  }

  const api = useMemo(() => new SpotifyWebApi(), []);

  const [playback, setPlayback] = useState<SpotifyApi.CurrentPlaybackResponse>();
  
  //Used for polling the current song playing
  const [tick, setTick] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if(auth.isAuthorized) {
        api.getMyCurrentPlaybackState().then((playbackState) => {
          setPlayback(playbackState)
        });
      }
      setTick(!tick);
    }, 1000);
    return () => clearTimeout(timer);
  }, [tick, auth.isAuthorized, api]);

  useEffect(() => {
    api.setAccessToken(auth.accessToken)
  }, [auth.accessToken, api])
  
  
  if(!playback || !playback.item) {
    return null;
  }

  const song = playback.item.name
  const artist = playback.item.artists.map(a => a.name).join(', ')
  const isPlaying = playback.is_playing;
  const songDuration = playback.item.duration_ms;
  const songProgress = playback.progress_ms
  const imageUrl = playback.item.album.images[1].url
  
  return (
    <div style={{margin: 'auto', width: '50%', marginTop: '10%', textAlign: 'center'}}>
      <h2>{song}</h2>
      <h3>{artist }</h3>

      <img src={imageUrl} alt="album art"/>

      {songProgress && <h2>{millisToMinutesAndSeconds(songProgress)} / {millisToMinutesAndSeconds(songDuration)} </h2>}

      {/* Controls */}
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <button 
          style={{margin: '10px', padding: '10px'}} 
          onClick={() => {api.skipToPrevious()}}
        >
          <FaBackward/>
        </button>
        
        {!isPlaying && <button style={{margin: '10px', padding: '10px'}}  onClick={() => {api.play()}}><FaPlay/></button> }
        {isPlaying && <button style={{margin: '10px', padding: '10px'}}  onClick={() => {api.pause()}}><FaPause/></button> }
        
        <button 
          style={{margin: '10px', padding: '10px'}}  
          onClick={() => {api.skipToNext()}}
        >
          <FaForward/>
        </button>
      </div>
    </div>
  )
}

export default Playback;