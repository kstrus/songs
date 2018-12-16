import React from 'react';
import SongsList from './SongsList';
import SongDetails from './SongDetails';

class App extends React.Component {
    render() {
        return (
            <div className="ui container grid" style={{ marginTop: '20px' }}>
                <div className="ui row">
                    <div className="column eight wide">
                        <SongsList />
                    </div>
                    <div className="column eight wide">
                        <SongDetails />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
