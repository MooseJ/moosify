import { useAuth } from "contexts/auth";
import React, { useEffect, useMemo } from "react";
import SpotifyWebApi from 'spotify-web-api-js';
import { FaBackward, FaForward, FaPlay, FaPause } from "react-icons/fa";
import { 
  PlaybackButton, 
  PlaybackButtonContainer, 
  PlaybackButtonsContainer, 
} from 'components/playback-controls/style';


interface Props {
  isPlaying: boolean
}

const PlaybackControls = (props: Props) => {
  const auth = useAuth();
  const api = useMemo(() => new SpotifyWebApi(), []);
  
  const { isPlaying } = props;

  useEffect(() => {
    api.setAccessToken(auth.accessToken)
  }, [auth.accessToken, api])
  
  
  const playbackButtonIconProps = {
    color: "#868686",
    size: "25"
  }

  return (
    <PlaybackButtonsContainer>
      <PlaybackButtonContainer>
        <PlaybackButton onClick={() => {api.skipToPrevious()}}>
          <FaBackward  {...playbackButtonIconProps}/>
        </PlaybackButton>
      </PlaybackButtonContainer>
      
      
      {!isPlaying && 
        <PlaybackButtonContainer>
          <PlaybackButton onClick={() => {api.play()}}>
            <FaPlay {...playbackButtonIconProps}/>
          </PlaybackButton> 
        </PlaybackButtonContainer>
        
      }

      {isPlaying &&
        <PlaybackButtonContainer>
          <PlaybackButton onClick={() => {api.pause()}}>
            <FaPause  {...playbackButtonIconProps}/>
          </PlaybackButton> 
        </PlaybackButtonContainer> 
      }
      
      <PlaybackButtonContainer>
        <PlaybackButton onClick={() => {api.skipToNext()}}>
          <FaForward {...playbackButtonIconProps}/>
        </PlaybackButton> 
      </PlaybackButtonContainer> 
    </PlaybackButtonsContainer>
  )
}

export default PlaybackControls;