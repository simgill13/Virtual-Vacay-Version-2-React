import React from 'react';
import {connect} from 'react-redux';
import {loginUserPage} from '../actions/action';
import {Link} from 'react-router';


 class Nav extends React.Component {
    constructor(props) {
        super(props);

    }



    render() {
             return (
                <div className="nav-bar" >
                      <h3 className='logged-in-as'>Logged in as</h3>
                      <h3 className='logged-in-name'>{this.props.name}</h3>      
                    <div className='inline1'>
                     <Link to={'/history'}> Vacations </Link>
                    </div>
                    <div className='inline1'>
                    <button type="submit" className="logout-button">Logout</button>
                    </div>
                    <div className='inline1'>
                      <img className="profile-pic" src={this.props.profilePicURL}/>
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
