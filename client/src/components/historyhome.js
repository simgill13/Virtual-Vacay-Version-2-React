import React from 'react';
import {connect} from 'react-redux';
import HistoryResults from './historyresults';
import HistorySideBar from './historysidebar';
import PostingANewVacay from './historyvacaypost';

 class HistoryHome extends React.Component {




   render() {
     let cardPage;
     if (this.props.cardShowing === true) {
       cardPage=<HistoryResults/>;
     }

     return (
       <div className="mainPageVacations" >
       <HistorySideBar/>
       {cardPage}
       </div>
     );
   }
 }

const mapStateToProps = (state) => ({
    cardShowing: state.cardShowing

});
export default connect(mapStateToProps)(HistoryHome)
