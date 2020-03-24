import axios from 'axios';

const KEY = 'AIzaSyDE5WEMohKWGlWUsoUd9j_EPtQGiGme2k0';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
      part: "snippet",
      maxResults: 5,
      type: 'video',
      key: KEY
    }
});  


// onTermSubmit = async term => {
//     const response = await youtube.get("/search", {
//       params: {
//         q: term,
//         part: "snippet",
//         maxResults: 5,
//         type: 'video',
//         key: KEY
//       }
// });