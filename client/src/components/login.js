import React from 'react';





export default class Login extends React.Component {
    // constructor(props) {
    //     super(props);
    // }




    render() {
             return (
                <div className="loginDiv" >
                  <form className="main-input" >
                    <input type="text" placeholder="username" className="username" ></input>

                    <br/>
                    <input type="text" placeholder="password" className="password" ></input>
                    <br/>
                    <button type="submit">Login </button>
                  </form>
                </div>
            
        );
    }
}
