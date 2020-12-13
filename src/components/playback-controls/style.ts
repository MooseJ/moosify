import styled, { keyframes } from 'styled-components';

export const PlaybackButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  margin: auto;
  @media (max-width: 600px) {
    margin-top: 40px;
  }
`


export const PlaybackButtonContainer = styled.div`
  width: 150px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 600px) {
    width: 75px;
    height: 50px;
    margin-right: 20px;
    margin-left: 20px;
  }
`

const rotate = keyframes`
  from {
    box-shadow: inset 0px -2px 5px rgb(255, 255, 255), inset 0px 2px 5px rgba(0, 0, 0, 0.15);
  }

  to {
    box-shadow: 0px -6px 10px rgba(255, 255, 255, 1), 0px 4px 15px rgba(0, 0, 0, 0.15);
  }
`;

export const PlaybackButton = styled.button`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #f2f2f2;
  box-shadow: 0px -6px 10px rgba(255, 255, 255, 1), 0px 4px 15px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  border: 0;
  &:focus {
    border: none;
    outline: 0 !important;
    outline-style: none;
    animation: ${rotate} 1s;
    transition: all 100ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  
  @media (max-width: 600px) {
    width: 60px;
    height: 60px;
  }
`


