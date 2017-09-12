import React from 'react';
import {connect} from 'react-redux';
import $ from 'jquery';

import {
    searchRequest,
    soundCloudIcon
} from '../actions/action';



 class Search extends React.Component {

   componentDidMount() {
   $(function () {
     let timer;

     $(document).mousemove(function () {
       if (timer) {
         clearTimeout(timer);
         timer = 0;
         $('.search-box').fadeIn();
       }

       timer = setTimeout(function () {
         $('.search-box').fadeOut()
       }, 3000)
     });
   });
 }


    render() {


        if (this.props.NoCountryInDb === true) {
           return (
                <div className="search-box" >
                  <h2 className='motto searchMotto'> Sorry, we do not have a video for this location, please select All Vacations. </h2>
                  <form onSubmit={(event) => {
                      event.preventDefault();
                      const userInput = event.target.searchfield.value;
                      this.props.dispatch(searchRequest(userInput));
                      this.props.dispatch(soundCloudIcon());
                  }} className="search-form" >
                    <input name="searchfield" type="text" placeholder=" i.e france"  className="search-bar" required></input>
                    <button type="submit" className="vacation-link">Search</button>
                  </form>
                </div>
          );
        }
        else{
          return (
                <div className="search-box" >
                  <h2 className='motto searchMotto'> Hi {this.props.name}, where would you like to go today? </h2>
                  <form onSubmit={(event) => {
                      event.preventDefault();
                      const userInput = event.target.searchfield.value;
                      this.props.dispatch(searchRequest(userInput));
                      this.props.dispatch(soundCloudIcon());
                  }} className="search-form" >
                    <input name="searchfield" type="text" placeholder=" i.e france"  className="search-bar" required></input>
                    <button type="submit" className="vacation-link">Search</button>
                  </form>
                </div>
        );



        }


             
    }
}

const mapStateToProps = (state) => ({
 name: state.name,
 videoUrl: state.videoUrl,
 NoCountryInDb:state.NoCountryInDb
});
export default connect(mapStateToProps)(Search)

//NOTE
//  if you would like to reset the search input field once the user
//has typed something in and clicked search
// the code is
//event.target.searchfield.value = ''