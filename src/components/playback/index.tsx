import { useAuth } from "contexts/auth";
import React, { useEffect, useMemo, useState } from "react";
import SpotifyWebApi from 'spotify-web-api-js';
import { millisToMinutesAndSeconds } from "utils/timeFormatter";
import { 
  AlbumCoverImage, 
  AlbumCoverImageContainer, 
  PlaybackContainer 
} from 'components/playback/style';
import PlaybackControls from "components/playback-controls";


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

  // TODO: definitely do something with this
  // TODO: also handle the case when music is not playing better
  // TODO: decrease delay on actions (skipping, pausing)
  // TODO: handle values that can be undefined more gracefully
  const song = playback.item.name
  const artist = playback.item.artists.map(a => a.name).join(', ')
  const isPlaying = playback.is_playing;
  const songDuration = playback.item.duration_ms;
  const songProgress = playback.progress_ms
  const imageUrl = playback.item.album.images[0].url
  const imageHeight = playback.item.album.images[0].height;
  const imageWidth = playback.item.album.images[0].width;

  return (
    <PlaybackContainer>
      <h1>{song}</h1>
      <h2>{artist }</h2>

      <AlbumCoverImageContainer height={imageHeight!} width={imageWidth!}>
        <AlbumCoverImage  height={imageHeight!} width={imageWidth!} src={imageUrl} alt="album art"/>
      </AlbumCoverImageContainer>

      {songProgress && <h2>{millisToMinutesAndSeconds(songProgress)} / {millisToMinutesAndSeconds(songDuration)} </h2>}

      <PlaybackControls isPlaying={isPlaying}/>
    </PlaybackContainer>
  )
}

export default Playback;