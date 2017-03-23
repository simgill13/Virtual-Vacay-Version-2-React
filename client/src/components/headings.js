import React from 'react';
import {connect} from 'react-redux';
// import {loginUserPage} from '../actions/action';



 class Headings extends React.Component {
   


render() {
         return (
           <div className="main-headings">
             <h1 className='title'>Virtual Vacay</h1>
             <h4 className='motto'> For when you need a virtual vacation</h4>
           </div>
    );
  }
}
export default connect()(Headings)
