import React from 'react';
import {connect} from 'react-redux';
import {PostingANewVacay} from './historyvacaypost';
import {postVacationForm} from '../actions/action';


 class HistorySideBar extends React.Component {

   constructor(props) {
   super(props);
   this.renderPostForm = this.renderPostForm.bind(this)

   }

   renderPostForm() {
     this.props.dispatch(postVacationForm());
   }

    render() {
             return (
                <div className="sideNavigation" >
                <h3 className='vacation-logged-in-as'>Logged In As</h3>
                <h3 className='vacation-logged-in-name'>{this.props.name}</h3>
                <div>
                  <img role="presentation" className="vacation-profile-pic" src={this.props.profilePicURL}/>
                </div>
                <div>
                <button type="submit" className="vacation-link">Logout</button>
                </div>
                <div>
                <h3>Add Your Personalized Vacation Here</h3>
                </div>
                <div>
                <button type="submit" onClick={this.renderPostForm} className="vacation-link">Add</button>
                </div>
                </div>
        );
    }
}

const mapStateToProps = (state) => ({
  profilePicURL: state.profilePicURL,
  name: state.name,
  cardShowing: state.cardShowing


});
export default connect(mapStateToProps)(HistorySideBar)
