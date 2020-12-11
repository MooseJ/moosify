export const baseAuthorizationUrl = "https://accounts.spotify.com/authorize";

export const scope = [
  "user-read-private",
  "user-read-email",
  "user-read-playback-state",
  "user-modify-playback-state"
]
export const clientId = "f10cc188323645a1ab61b8558a83027a"
export const redirectUri = "http://localhost:3000/callback" //TODO: change this before deploying
export const responseType = "token"