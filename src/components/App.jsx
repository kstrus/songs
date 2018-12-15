import React from 'react';
import SongsList from './SongsList';

class App extends React.Component {
    onSongSelect = (song) => {
        console.log(song.title);
    };

    render() {
        return (
            <div className="ui container grid" style={{ marginTop: '20px' }}>
                <div className="ui row">
                    <div className="column eight wide">
                        <SongsList onSongSelect={this.onSongSelect}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
