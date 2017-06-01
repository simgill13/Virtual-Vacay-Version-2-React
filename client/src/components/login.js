import React from 'react';
import SocialLogin from 'react-social-login';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {fetchUser,hideLogin,toogleHeadding,toogleNav,toogleSearch,toogleGSearch} from '../actions/action';



class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleSocialLogin=this.handleSocialLogin.bind(this);
  }

  handleSocialLogin (user,err)  {
    if(user === null){
      return true
    }
   const googleId = user._profile.id;
   const name= user._profile.name;
   const email= user._profile.email;
   const profilePicURL= user._profile.profilePicURL;
   const accessToken= user._token.accessToken;
   const expiresAt= user._token.expiresAt.toString(); 
   this.props.dispatch(fetchUser(googleId,name,email,profilePicURL,accessToken,expiresAt));
   this.props.dispatch(hideLogin());
   this.props.dispatch(toogleHeadding());
   this.props.dispatch(toogleNav());
   this.props.dispatch(toogleSearch());
  }
 

    render() {
      return (
        <div className="loginDiv" >
         <SocialLogin
             provider="google"
              appId="529372659575-7gkab0trcpo71sdl4sg20ktsfsp14ud4.apps.googleusercontent.com"
             callback={this.handleSocialLogin} >
             <button className="loginBtn loginBtn--google">SignIn Using Google</button>
          </SocialLogin>
          <p className="or">Or </p>
          <form className="main-input" >
           <Link to={'/guest'} className='home-guest'>Continue As Guest</Link>
          </form>
        </div>
      );
    }
}



const mapStateToProps = (state) => ({
});
export default connect(mapStateToProps)(Login)