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
                <div className="player-div" >
                {/* <iframe className="player" allowTransparency="true" scrolling="no" frameBorder="no" src={`${defaultSount}&auto_play=true`}></iframe> */}
                <iframe className="player" allowtransparency="true" scrolling="no" frameborder="no" src="https://w.soundcloud.com/icon/?url=http%3A%2F%2Fsoundcloud.com%2Fhttps%3A%2F%2Fsoundcloud.com%2Frasha406%2Fwonderful-arabian-chill-out-music&color=orange_white&size=24" ></iframe>
          
                

                </div>
        );
    }
}

const mapStateToProps = (state) => ({
 soundUrl: state.soundUrl

});
export default connect(mapStateToProps)(GSound)