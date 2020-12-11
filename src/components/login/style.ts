import styled from 'styled-components';

export const WeirdMusicBirdImage = styled.img`
  position: absolute;
  right: 0px;
  bottom: 0px;
`

export const LoginButton = styled.button`
  width: 300px;
  height: 100px;
  border-radius: 50px;
  background: #f2f2f2;
  box-shadow: 0px -6px 10px rgba(255, 255, 255, 1), 0px 4px 15px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  border: 0;
  color: #868686;
  margin-left: 10%;
  &:focus {
    border: none;
    outline: 0 !important;
    outline-style: none;
  }
`

export const Title = styled.h1`
  margin-left: 10%;
  margin-top: 10%;
  font-size: 84px
`
