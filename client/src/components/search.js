import React from 'react';
import {connect} from 'react-redux';
import {loginUserPage} from '../actions/action';



 class Search extends React.Component {
    constructor(props) {
        super(props);

    }



    render() {
             return (
                <div className="search-box" >
                  <form className="search-input" >
                    <input type="text" placeholder="Enter Country Here" className="search-bar"></input>
                    <button type="submit" className="search-button">Search</button>
                  </form>
                </div>
        );
    }
}
export default connect(mapStateToProps)(Search)
