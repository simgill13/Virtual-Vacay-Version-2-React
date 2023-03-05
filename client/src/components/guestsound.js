import React from 'react';
import {connect} from 'react-redux';
import $ from 'jquery';

class GSound extends React.Component {


    componentDidMount() {
        $(function () {
            let timer;

            $(document).mousemove(function () {
                if (timer) {
                    clearTimeout(timer);
                    timer = 0;
                    $('.player-div').fadeIn();
                }

                timer = setTimeout(function () {
                    $('.player-div').fadeOut()
                }, 3000)
            });
        });
    }

    render() {

        return (
            <div className="player-div">
                <iframe width="100%" height="300" scrolling="no" frameBorder="no" allow="autoplay"
                        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/189874767&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    soundUrl: state.soundUrl

});
export default connect(mapStateToProps)(GSound)
