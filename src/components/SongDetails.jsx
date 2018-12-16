import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class SongDetails extends React.Component {
    render() {
        const { selectedSong } = this.props;

        if (!selectedSong) {
            return <div>Select a song</div>;
        }

        return (
            <div>
                <h3>Song details</h3>
                <p>
                    Title: {selectedSong.title} <br/>
                    Duration: {selectedSong.duration}
                </p>
            </div>
        );
    }
}

SongDetails.propTypes = {
    selectedSong: PropTypes.object
};

const mapStateToProps = (state) => {
    return { selectedSong: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetails);
