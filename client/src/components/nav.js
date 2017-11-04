import React from 'react';
import {connect} from 'react-redux';
import {showVacayList,toogleNavOff,toogleSearchOff} from '../actions/action';
import {Link} from 'react-router';
import $ from 'jquery';
import Vacations from './vacations';


 class Nav extends React.Component {

     constructor(props) {
         super(props);
         this.renderInitialState = this.renderInitialState.bind(this)
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

   renderInitialState() {
     location.reload();
   }
   vacations(){
    this.props.dispatch(showVacayList());
    this.props.dispatch(toogleNavOff());
    this.props.dispatch(toogleSearchOff());
   }

    render() {
     

             return (
                <div className="nav-bar" >
                 <div className="log-in-container">
                    <h3 className='logged-in-name'>{this.props.name}</h3>
                    <div className='goog-img'>

                    </div>
                 </div>
                 <div className='nav-button'>
                    <div className='inline1'>
                     
                     <button type="submit" onClick={this.vacations} className='vacation-link'>All Vacations</button>
                    </div>
                    <div className='inline1'>
                     <button type="submit" onClick={this.renderInitialState} className='vacation-link'>Logout</button>
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
export default connect(mapStateToProps)(Nav)