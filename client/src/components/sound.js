import React from 'react';
import {connect} from 'react-redux';
import $ from 'jquery';

 class Sound extends React.Component {


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
                <div className="player-div" >
                <iframe className="player" allowTransparency="true" scrolling="no" frameBorder="no" src={`${this.props.soundUrl}&auto_play=true`}></iframe>
                </div>
        );
    }
}

const mapStateToProps = (state) => ({
 soundUrl: state.soundUrl

});
export default connect(mapStateToProps)(Sound)
