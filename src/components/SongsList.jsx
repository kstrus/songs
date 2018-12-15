import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class SongsList extends React.Component {
    render() {
        const { songsList, onSongSelect } = this.props;
        const list = songsList.map((song, i) => {
            return (
                <div className="item" key={i}>
                    <div className="right floated content">
                        <button className="ui button primary" onClick={() => { onSongSelect(song); }}>
                            Select
                        </button>
                    </div>
                    <div className="content" style={{ paddingTop: '10px' }}>{song.title}</div>
                </div>
            );
        });

        return <div className="ui divided list">{list}</div>;
    }
}

SongsList.propTypes = {
    songsList: PropTypes.array,
    onSongSelect: PropTypes.func
};

const mapStateToProps = (state) => {
    return { songsList: state.songsList };
};

export default connect(mapStateToProps)(SongsList);
