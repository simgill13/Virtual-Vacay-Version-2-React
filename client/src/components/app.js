
import React from 'react';
import {connect} from 'react-redux';
import Home from '../components/home';
import MobileErrorMsg from './mobileMsg'


class App extends React.Component {
   



    render() {

            	var DEBUG = false;
        if(!DEBUG){
            if(!window.console) window.console = {};
            var methods = ["log", "debug", "warn", "info"];
            for(var i=0;i<methods.length;i++){
                console[methods[i]] = function(){};
            }
        }

       //  let home;
      	// if (window.innerHeight>737 && window.innerWidth>415 ) {
       //  	home=<Home/>
      	// }

      	// let mobile
      	// if (window.innerHeight<737 && window.innerWidth<415 ){
      	// 	mobile=<MobileErrorMsg/>
      	// }

        return (

            <div className="app">
             <Home/>
            	
            </div>
        );
    }
}
   


export default connect()(App);
