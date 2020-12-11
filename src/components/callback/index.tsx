import { useAuth } from "contexts/auth";
import { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { CallbackContainer } from "components/callback/style";

const Callback = () => {
  const auth = useAuth();

  const queryStringWithoutTheHash = window.location.hash.replace('#', '');
  const urlParams = new URLSearchParams(queryStringWithoutTheHash);
  const accessToken = urlParams.get('access_token');
  const state = urlParams.get('state');

  useEffect(() => {
    if (accessToken && state) {
      auth.signIn(accessToken, state)
    }
  }, [accessToken, state, auth])
  
  
  if (auth.isAuthorized) {
    return (
      <Redirect to='/playback'/>
    )
  }

  return (
    <CallbackContainer>
      <h1>Attempting to login...</h1>
      <h2>If you see this message for a while, not gonna lie, but something is probably broken.</h2>  
    </CallbackContainer>
  )
}

export default Callback;