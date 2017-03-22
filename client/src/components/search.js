import React from 'react';
import {connect} from 'react-redux';
import {loginUserPage} from '../actions/action';
import {
    updateSearchField,
    searchRequest,
    soundCloudIcon
} from '../actions/action';



 class Search extends React.Component {
    constructor(props) {
        super(props);
    }



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
                    <input name="searchfield" type="text" placeholder="Enter Country Here" onChange={this.grabVal} className="search-bar"></input>
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
