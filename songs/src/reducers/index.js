import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        {title: 'Dil Chahta Hai', duration: '2:30'},
        {title: 'Chak De India', duration: '4:44'},
        {title: 'Kar Har Maidan Fateh', duration: '5:11'},
        {title: 'Hasbi Rabbi', duration: '5:05'}
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
      return action.payload;
    }
  
    return selectedSong;
};
  
export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});
  