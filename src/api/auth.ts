import { baseAuthorizationUrl, clientId, redirectUri, responseType, scope } from "api/constants";


const generateAndStoreRandomState = () => {
  const state = (Math.random() * 999999).toFixed(0).toString();
  window.localStorage.setItem("state", state);
  return state
}

export const buildQueryData = () => ({
  client_id: clientId,
  scope: scope.join(" "),
  redirect_uri: redirectUri,
  response_type: responseType,
  state: generateAndStoreRandomState()
})



export const getLoginUri = () => {
  const searchParams = new URLSearchParams(buildQueryData());
  return `${baseAuthorizationUrl}?${searchParams}`
};