import React from 'react';
import {connect} from 'react-redux';

import {
    searchRequest,
    soundCloudIcon
} from '../actions/action';



 class Search extends React.Component {
   



    render() {
             return (
                <div className="search-box" >
                  <h2 className='motto'>Hi {this.props.name}, where would you like to go today?</h2>
                  <form onSubmit={(event) => {
                      event.preventDefault();
                      const userInput = event.target.searchfield.value;
                      console.log(userInput);
                       this.props.dispatch(searchRequest(userInput));
                       this.props.dispatch(soundCloudIcon());
                      
                  }} className="search-form" >
                    <input name="searchfield" type="text" placeholder="Enter Country Here"  className="search-bar"></input>
                    <button type="submit" className="search-button">Search</button>
                  </form>
                </div>
        );
    }
}

const mapStateToProps = (state) => ({
 name: state.name,
 videoUrl: state.videoUrl,

});
export default connect(mapStateToProps)(Search)

//NOTE
//  if you would like to reset the search input field once the user 
//has typed something in and clicked search
// the code is 
//event.target.searchfield.value = ''