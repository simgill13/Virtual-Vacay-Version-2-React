import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import HistoryResults from './historyresults';
import HistorySideBar from './historysidebar';

 class HistoryHome extends React.Component {
    constructor(props) {
        super(props);

    }



    render() {
             return (
                <div className="HistoryHome" >
                  <h1> tesing HistoryHome/board </h1>
                  <HistorySideBar/>
                  <HistoryResults/>
                  
                </div>
        );
    }
}

const mapStateToProps = (state) => ({
 
});
export default connect(mapStateToProps)(HistoryHome)