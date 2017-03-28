import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

 class HomeButton extends React.Component {




    render() {
             return (
                <div className="logout " >
                   <h1> GO back home  </h1>

               </div>
        );
    }
}


export default connect()(HomeButton)
