import { useAuth } from 'contexts/auth';
import { Title, LoginButton, WeirdMusicBirdImage } from 'components/login/style';

const Login = () => {
  const auth = useAuth();
  return (
    <div>
      <Title>Moosify</Title>
      <LoginButton 
        onClick={() => auth.authorize()}
      >
        <h1>Login with Spotify</h1>
      </LoginButton>
      <WeirdMusicBirdImage src='undraw_happy_music_g6wc.svg' />
    </div>
  )
}

export default Login;