import { useAuth } from "auth/auth";
import { useEffect } from "react";
import { Redirect } from "react-router-dom";


const Callback = () => {
  const auth = useAuth();

  const urlParams = new URLSearchParams(window.location.hash.substring(1));
  const accesstoken = urlParams.get('access_token');
  const state = urlParams.get('state');

  useEffect(() => {
    if (accesstoken && state) {
      auth.signIn(accesstoken, state)
    }
  }, [accesstoken, state, auth])
  
  
  if (auth.isAuthorized) {
    return (
      <Redirect to='/playback'/>
    )
  }

  return (
    <h2>...</h2>
  )
}

export default Callback;