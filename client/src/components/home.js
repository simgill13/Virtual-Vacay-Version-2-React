import React from 'react';
import ReactPlayer from 'react-player';
import Login from './login';
import Nav from './nav';
import Search from './search';
import Headings from './headings';
import Sound from './sound';
import HomeButton from './homeButton';
import {connect} from 'react-redux';
import {

} from '../actions/action';



 class Home extends React.Component {
  
    // constructor(props) {
    //     super(props);




    render() {
      let loginPage;
      if (this.props.loggedIn === false) {
        loginPage=<Login/>;
      }
      let searchPage;
      if (this.props.loggedIn === true ) {
        searchPage=<Search/>;
      }
      let navPage;
      if (this.props.loggedIn === true && this.props.userType !== "guest") {
        navPage=<Nav/>
      }
      let headings;
      if (this.props.loggedIn === false) {
        headings=<Headings/>
      }
      let sound;
      if (this.props.soundShowing === true ) {
        sound=<Sound/>
      }

       let home;
      if (this.props.homeButton === true ) {
        sound=<HomeButton/>
      }
      
      return (
        <div className="home">
         {navPage}
         {home}
         {headings}
          <div className="video-background">
            <div className="video-foreground">
              <ReactPlayer url={this.props.videoUrl} volume={0}
               playing loop={true} youtubeConfig={{playerVars: {end: 500 }}}/>
            </div>
          </div>
          {loginPage}
          {searchPage}
        <footer>
         {sound}
        </footer>
       </div>
      )
    }
 }


const mapStateToProps = (state) => ({
 loggedIn: state.loggedIn,
 name: state.name,
 videoUrl: state.videoUrl,
 soundUrl: state.soundUrl,
 soundShowing: state.soundShowing,
 userType:state.loggedInUserType,
 homeButton:state.homeButton
});


export default connect(mapStateToProps)(Home);
