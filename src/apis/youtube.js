import axios from 'axios';

const KEY = 'AIzaSyBF5nrKNGIjpJcj_sfkUGH16MPC1Pji_Dc';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResult: 5,
    key: KEY
  }
});

