import styled from 'styled-components';

export const PlaybackContainer = styled.div`
  margin: auto;
  padding-top: 3%;
  text-align: center;
  @media (max-width: 600px) {
    padding-top: 5%;
  }
`
interface DimensionsProp {
  height: number;
  width: number;
};

export const AlbumCoverImage = styled.img<DimensionsProp>`
  box-shadow: "-10px -10px 15px rgba(255, 255, 255, 1), 10px 10px 15px rgba(0, 0, 0, 0.30)";
  width: ${props =>  `${props.width-200}px`};
  height: ${props =>  `${props.height-200}px`};
  @media (max-width: 600px) {
    width: ${props =>  `${props.width/1.4-200}px`};
    height: ${props =>  `${props.height/1.4-200}px`};
  }
`

export const AlbumCoverImageContainer = styled.div<DimensionsProp>`
  padding: 20px;
  box-shadow: inset 0px -4px 6px rgb(255, 255, 255), inset 0px 4px 6px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: ${props =>  `${props.width-180}px}`};
  height: ${props =>  `${props.height-180}px`};
  @media (max-width: 600px) {
    width: ${props =>  `${props.width/1.4-180}px`};
    height: ${props =>  `${props.height/1.4-180}px`};
    margin-top: 40px;
    margin-bottom: 40px;
    padding: 10px;
  }
`


export const Title = styled.h1`
  @media (max-width: 600px) {
    font-size: 20px;
  }
`
export const Artist = styled.h2`
  @media (max-width: 600px) {
    font-size: 14px;
  }
`

export const PlaybackTime = styled.h2`
  @media (max-width: 600px) {
    font-size: 14px;
  }
`