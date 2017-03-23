import React from 'react';
import {connect} from 'react-redux';


 class HistorySideBar extends React.Component {




    render() {
             return (
                <div className="sideNavigation" >
                <h3 className='logged-in-name'>{this.props.name}</h3>
                <div>
                  <img role="presentation" className="profile-pic" src={this.props.profilePicURL}/>
                </div>
                <div>
                <button type="submit" className="logout-button">Logout</button>
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
