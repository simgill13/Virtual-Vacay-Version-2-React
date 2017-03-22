import React from 'react';
import ReactPlayer from 'react-player';
import Login from './login';
import Nav from './nav';
import Search from './search';
import Headings from './headings';
import {connect} from 'react-redux';
import {
    fetchvacations
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
      if (this.props.loggedIn === true) {
        searchPage=<Search/>;
      }
      let navPage;
      if (this.props.loggedIn === true) {
        navPage=<Nav/>
      }
      let headings;
      if (this.props.loggedIn === false) {
        headings=<Headings/>
      }
      return (
        <div className="home">
         {navPage}
         {headings}
          <div className="video-background">
            <div className="video-foreground">
              <ReactPlayer url={this.props.videoUrl} volume=""
               playing loop={true} />
            </div>
          </div>
          {loginPage}
          {searchPage}
        </div>
      )
    }
 }



const mapStateToProps = (state) => ({
 loggedIn: state.loggedIn,
 name: state.name,
 videoUrl: state.videoUrl
});


export default connect(mapStateToProps)(Home);
