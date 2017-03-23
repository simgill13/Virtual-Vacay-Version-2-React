import React from 'react';
import {connect} from 'react-redux';


 class HistorySideBar extends React.Component {




    render() {
             return (
                <div className="sideNavigation" >
                <h3 className='vacation-logged-in-as'>Logged In As</h3>
                <h3 className='v-l-i-n'>{this.props.name}</h3>
                <div>
                  <img role="presentation" className="vacation-profile-pic" src={this.props.profilePicURL}/>
                </div>
                <div>
                <button type="submit" className="vacation-logout-button">Logout</button>
                </div>
                </div>
        );
    }
}

const mapStateToProps = (state) => ({
  profilePicURL: state.profilePicURL,
  name: state.name

});
export default connect(mapStateToProps)(HistorySideBar)
