import React from 'react';
import {connect} from 'react-redux';
import {loginUserPage} from '../actions/action';



 class Nav extends React.Component {
    constructor(props) {
        super(props);

    }



    render() {
             return (
                <div className="nav-bar" >
                    <button type="submit" className="vacations-button">Vacations</button>
                    <button type="submit" className="logout-button">Logout</button>
                    <h3>Logged in as{this.props.name}</h3>
                    <img className="profile-pic" src={this.props.profilePicURL}/>
               </div>
        );
    }
}

const mapStateToProps = (state) => ({
 profilePicURL: state.profilePicURL,
 name: state.name
});
export default connect(mapStateToProps)(Nav)
