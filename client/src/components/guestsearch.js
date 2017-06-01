import React from 'react';
import {connect} from 'react-redux';
import $ from 'jquery';

import {
    searchRequest,
    GsoundCloudIcon
} from '../actions/action';



 class GSearch extends React.Component {

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
             return (
                <div className="search-box" >
                  <h2 className='motto searchMotto'> Hi {this.props.name}, where would you like to go today? </h2>
                  <form onSubmit={(event) => {
                      event.preventDefault();
                      const userInput = event.target.searchfield.value;
                      console.log(userInput);
                      this.props.dispatch(searchRequest(userInput));
                      this.props.dispatch(GsoundCloudIcon());
                  }} className="search-form" >
                    <input name="searchfield" type="text" placeholder=" i.e france"  className="search-bar" required></input>
                    <button type="submit" className="vacation-link">Search</button>
                  </form>
                </div>
        );
    }
}

const mapStateToProps = (state) => ({
 name: state.name,
 videoUrl: state.videoUrl,
});
export default connect(mapStateToProps)(GSearch)

