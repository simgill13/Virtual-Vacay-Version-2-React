import React from 'react';
import {connect} from 'react-redux';
import {PostingANewVacay} from './historyvacaypost';
import {postVacationForm} from '../actions/action';
import {exposePostForm} from '../actions/action';
import {Link} from 'react-router';


 class HistorySideBar extends React.Component {

   constructor(props) {
   super(props);
   this.renderPostForm = this.renderPostForm.bind(this)

   }

   renderPostForm() {
     this.props.dispatch(postVacationForm());
     this.props.dispatch(exposePostForm());
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
                <button type="submit" className="logout-sidebar">Logout</button>
                </div>
                <div>
                <button type="submit" onClick={this.renderPostForm} className="add-new-sidebar">Add New Vacation</button>
                <div>
                <Link to={'/'} className='home-sidebar'>Go Back</Link>
                </div>
                </div>
                </div>

        );
    }
}

const mapStateToProps = (state) => ({
  profilePicURL: state.profilePicURL,
  name: state.name,
  cardShowing: state.cardShowing,
  postShowing: state.postShowing


});
export default connect(mapStateToProps)(HistorySideBar)
