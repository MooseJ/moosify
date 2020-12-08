const baseUrl = "https://accounts.spotify.com/authorize";
const scope = [
  "user-read-private",
  "user-read-email",
  "user-read-playback-state",
  "user-modify-playback-state"
]
const clientId = "f10cc188323645a1ab61b8558a83027a"
const redirectUri = "http://localhost:3000/callback"
const responseType = "token"

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
  return `${baseUrl}?${searchParams}`
};