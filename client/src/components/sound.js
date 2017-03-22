import React from 'react';
import {connect} from 'react-redux';

 class Sound extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {
             return (
                <div className="player-div" >
                <iframe className= "player" allowtransparency="true" scrolling="no" frameborder="no" src={`${this.props.soundUrl}&auto_play=true`}></iframe>
                </div>
        );
    }
}

const mapStateToProps = (state) => ({
 soundUrl: state.soundUrl

});
export default connect(mapStateToProps)(Sound)
