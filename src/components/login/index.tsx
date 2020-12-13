import { useAuth } from 'contexts/auth';
import { Title, LoginButton, WeirdMusicBirdImage, LoginButtonText, LoginContainer } from 'components/login/style';

const Login = () => {
  const auth = useAuth();
  return (
    <LoginContainer>
      <Title>Moosify</Title>
      <br/>
      <br/>
      <LoginButton 
        onClick={() => auth.authorize()}
      >
        <LoginButtonText>Login with Spotify</LoginButtonText>
      </LoginButton>
      <WeirdMusicBirdImage src='undraw_happy_music_g6wc.svg' />
    </LoginContainer>
  )
}

export default Login;