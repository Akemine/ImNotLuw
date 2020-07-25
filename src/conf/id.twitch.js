import * as axios from 'axios';

const idTwitch = axios.create({
          baseURL: 'https://id.twitch.tv'
        })

export default idTwitch;