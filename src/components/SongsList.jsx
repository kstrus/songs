import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongsList extends React.Component {
    render() {
        const { songsList } = this.props;

        const list = songsList.map((song, i) => {
            return (
                <div className="item" key={i}>
                    <div className="right floated content">
                        <button className="ui button primary" onClick={() => this.props.selectSong(song)}>
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
    selectSong: PropTypes.func
};

const mapStateToProps = (state) => {
    return { songsList: state.songsList };
};

export default connect(
    mapStateToProps,
    { selectSong: selectSong }
)(SongsList);
