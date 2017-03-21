import React from 'react';
import SocialLogin from 'react-social-login';
import {connect} from 'react-redux';
import {postUserData,fetchHouses,loginUserPage} from '../actions/action';



 class Login extends React.Component {
    constructor(props) {
        super(props);

        this.handleSocialLogin=this.handleSocialLogin.bind(this);
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
   this.props.dispatch(loginUserPage())

 }

    render() {
             return (
                <div className="loginDiv" >
                 <SocialLogin
                     provider="google"
                      appId="1085669919173-lslfngv7lb6j9sr7eostmtk54mrdmhc5.apps.googleusercontent.com"
                     callback={this.handleSocialLogin} >
                     <button className="loginBtn loginBtn--google">Signup Using Google</button>
                  </SocialLogin>
                  <form className="main-input" >
                    <input type="text" placeholder="Username" className="   username" ></input>

                    <br/>
                    <input type="text" placeholder="Password" className="   password" ></input>
                    <br/>
                    <button type="submit" className="main-login">Login </button>
                  </form>
                </div>

        );
    }
}
export default connect()(Login)




// passport google??
