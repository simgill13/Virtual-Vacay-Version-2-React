import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

 class Logout extends React.Component {




    render() {
             return (
                <div className="logout " >
                   <h1> You are now Logged Out </h1>

               </div>
        );
    }
}


export default connect()(Logout)
