import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';


 class HistorySideBar extends React.Component {
    constructor(props) {
        super(props);

    }



    render() {
             return (
                <div className="HistorySideBar" >
                  <h1> testing Historysidebar </h1>
                </div>
        );
    }
}

const mapStateToProps = (state) => ({
 
});
export default connect(mapStateToProps)(HistorySideBar)