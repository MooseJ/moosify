import styled from 'styled-components';

export const PlaybackContainer = styled.div`
  margin: auto;
  padding-top: 3%;
  text-align: center;
`
interface DimensionsProp {
  height: number;
  width: number;
};

export const AlbumCoverImage = styled.img<DimensionsProp>`
  box-shadow: "-10px -10px 15px rgba(255, 255, 255, 1), 10px 10px 15px rgba(0, 0, 0, 0.30)";
  width: ${props =>  `${props.width-200}px`};
  height: ${props =>  `${props.height-200}px`};
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
`
