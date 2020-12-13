import styled from 'styled-components';

export const WeirdMusicBirdImage = styled.img`
  position: absolute;
  right: 0px;
  bottom: 0px;
  @media (max-width: 1400px) {
    display: none;
  }
`

export const LoginContainer = styled.div`
@media (max-width: 600px) {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 75%;
  height: 50%;
  margin: auto;
  margin-top: 20%;
}
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
  @media (max-width: 600px) {
    width: 250px;
    height: 75px;
    margin: auto;
  }
`

export const LoginButtonText = styled.h1`
@media (max-width: 600px) {
  font-size: 16px;
}
`

export const Title = styled.h1`
  margin-left: 10%;
  margin-top: 10%;
  font-size: 84px;
  @media (max-width: 600px) {
    font-size: 42px;
    margin: auto;
  }

`
