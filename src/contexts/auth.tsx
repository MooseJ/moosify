import { createContext, useContext, useState } from "react";
import { getLoginUri } from "api/auth";

type Auth = {
  accessToken: string,
  isAuthorized: boolean,
  signIn: (accessToken: string, returnedState: string) => void
  authorize: () => void
}

const AuthContext = createContext<Auth>({
  accessToken: "",
  isAuthorized: false,
  signIn: () => {},
  authorize: () => {}
});

export const ProvideAuth: React.FC = ({ children }) =>  {
  const auth = useProvideAuth();
  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);

const useProvideAuth = (): Auth => {
  const [accessToken, setAccessToken] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);

  const authorize = () => {    
    window.location.href = getLoginUri()
  }

  const signIn = (accessToken: string, returnedState: string) => {
    if(window.localStorage.getItem("state") === returnedState) {
      window.localStorage.removeItem("state");
      setAccessToken(accessToken);
      setIsAuthorized(true);
    }
  }

  return {
    accessToken,
    isAuthorized,
    signIn,
    authorize
  };
}