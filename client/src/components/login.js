import React from 'react';

import SocialLogin from 'react-social-login';



export default class Login extends React.Component {
    constructor(props) {
        super(props);

        this.handleSocialLogin=this.handleSocialLogin.bind(this);
    }


 handleSocialLogin (user,err)  {
   console.log(user); //either you will get a user
   console.log(err); //or an error
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





// passport google??
