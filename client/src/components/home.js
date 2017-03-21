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


   componentDidMount() {
      this.props.dispatch(fetchvacations());
    }


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
              <ReactPlayer url='https://www.youtube.com/embed/jEnd8JIMii4?start=16m12s' volume={0}
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
 name: state.name
});


export default connect(mapStateToProps)(Home);
