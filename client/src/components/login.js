import React from 'react';
import SocialLogin from 'react-social-login';
import {connect} from 'react-redux';
import {postUserData,loginUserPage} from '../actions/action';



 class Login extends React.Component {
    constructor(props) {
        super(props);

        this.handleSocialLogin=this.handleSocialLogin.bind(this);
        this.continueAsGuestClicked=this.continueAsGuestClicked.bind(this);
    }

 handleSocialLogin (user,err)  {
   console.log(user); //either you will get a user
   console.log(err); //or an error
   const id = user._profile.id;
   const name= user._profile.name;
   const email= user._profile.email;
   const profilePicURL= user._profile.profilePicURL;
   const accessToken= user._token.accessToken;
   const expiresAt= user._token.expiresAt;

   this.props.dispatch(postUserData(name,id,profilePicURL,accessToken,expiresAt,email))
   this.props.dispatch(loginUserPage("google"))
 }

  continueAsGuestClicked() {
    console.log('imheretoparty')
    this.props.dispatch(loginUserPage('guest'))
    // dispatch an action that takes out the nav bar for guest users

  }





    render() {


             return (
                <div className="loginDiv" >
                 <SocialLogin
                     provider="google"
                      appId="1085669919173-lslfngv7lb6j9sr7eostmtk54mrdmhc5.apps.googleusercontent.com"
                     callback={this.handleSocialLogin} >
                     <button className="loginBtn loginBtn--google">SignIn Using Google</button>
                  </SocialLogin>

                  <p className="or">Or</p>
                  <form className="main-input" onSubmit={this.continueAsGuestClicked} >
                    <button type="submit" className="vacation-link">Continue as Guest </button>
                  </form>
                </div>

        );
    }
}
export default connect()(Login)




// passport google??
