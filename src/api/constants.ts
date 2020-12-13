export const baseAuthorizationUrl = "https://accounts.spotify.com/authorize";

export const scope = [
  "user-read-private",
  "user-read-email",
  "user-read-playback-state",
  "user-modify-playback-state"
]
export const clientId = "f10cc188323645a1ab61b8558a83027a"
export const redirectUri = window.location.href.includes("localhost") 
  ? "http://localhost:3000/callback" 
  : "https://moosify-spotify.herokuapp.com/callback"
export const responseType = "token"
