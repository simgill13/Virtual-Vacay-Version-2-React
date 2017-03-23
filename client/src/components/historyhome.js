import React from 'react';
import {connect} from 'react-redux';
import HistoryResults from './historyresults';
import HistorySideBar from './historysidebar';
import PostingANewVacay from './historyvacaypost';

 class HistoryHome extends React.Component {
   



    render() {
             return (
                <div className="HistoryHome" >
                  
                  <HistorySideBar/>
                  <PostingANewVacay/>
                  <HistoryResults/>
                  
                </div>
        );
    }
}

const mapStateToProps = (state) => ({
 
});
export default connect(mapStateToProps)(HistoryHome)