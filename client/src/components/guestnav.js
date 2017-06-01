import React from 'react';
import {connect} from 'react-redux';
import {showGVacayList,toogleGNavOff,toogleGSearchOff} from '../actions/action';
import {Link} from 'react-router';
import $ from 'jquery';
import GVacations from './gvacations';


 class GNav extends React.Component {

      constructor(props) {
        super(props);
        this.vacations = this.vacations.bind(this)
      }

    componentDidMount() {
      $(function () {
        let timer;
        $(document).mousemove(function () {
          if (timer) {
            clearTimeout(timer);
            timer = 0;
            $('.nav-bar').fadeIn();
          }
          timer = setTimeout(function () {
            $('.nav-bar').fadeOut()
          }, 3000)
        });
      });
    }

   
   vacations(){

    this.props.dispatch(showGVacayList());
    this.props.dispatch(toogleGSearchOff());
    this.props.dispatch(toogleGNavOff());
   }

    render() {
     
             return (
                <div className="nav-bar" >
                 <div className="log-in-container">
                    
                    <div className='goog-img'>
                  
                    </div>
                 </div>
                 <div className='nav-button'>
                    <div className='inline1'> 
                     <button type="submit" onClick={this.vacations} className='vacation-link'>All Vacations</button>
                    </div>
                    <div className='inline1'>
                  
                    </div>
                  </div>
               </div>
        );
    }
}

const mapStateToProps = (state) => ({
 profilePicURL: state.profilePicURL,
 name: state.name
});
export default connect(mapStateToProps)(GNav)