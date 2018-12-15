import { combineReducers } from 'redux';

// we use hardcoded list of songs and we don't expect it to change at any moment
// use of Redux here is technically an overkill this is just an example
const songsListReducer = () => {
    return [
        { title: 'Death on Two Legs', duration: '3:43' },
        { title: 'Lazing on a Sunday Afternoon', duration: '1:07' },
        { title: 'Bohemian Rhapsody', duration: '5:55' },
        { title: 'You’re My Best Friend', duration: '2:50' },
        { title: 'Love of My Life', duration: '3:34' }
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SELECT_SONG') {
        return action.payload.song;
    }

    return selectedSong;
};

export default combineReducers({
    songsList: songsListReducer,
    selectedSong: selectedSongReducer
});
