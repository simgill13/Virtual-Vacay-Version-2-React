import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';


 class HistoryHome extends React.Component {
    constructor(props) {
        super(props);

    }



    render() {
             return (
                <div className="HistoryHome" >
                  <h1> tesing HistoryHome </h1>
                </div>
        );
    }
}

const mapStateToProps = (state) => ({
 
});
export default connect(mapStateToProps)(HistoryHome)