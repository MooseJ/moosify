import styled from 'styled-components';

export const PlaybackButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  margin: auto;
`

export const PlaybackButtonContainer = styled.div`
  width: 150px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`

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
  }
`
