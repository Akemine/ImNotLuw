import * as axios from 'axios'

const apiTwitch = axios.create({
  baseURL: 'https://api.twitch.tv'
})

apiTwitch.interceptors.request.use( req => {
  req.headers['client-id'] = process.env.REACT_APP_IMNOTLUW_TWITCH_CLIENT_ID;
  return req;
})

export default apiTwitch;