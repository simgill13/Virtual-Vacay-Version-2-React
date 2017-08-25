
import React from 'react';
import {connect} from 'react-redux';
import Home from '../components/home';
import MobileErrorMsg from './mobileMsg'


class App extends React.Component {
   



    render() {

    	

        let home;
      	if (window.innerHeight>737 && window.innerWidth>415 ) {
        	home=<Home/>
      	}

      	let mobile
      	if (window.innerHeight<737 && window.innerWidth<415 ){
      		mobile=<MobileErrorMsg/>
      	}

        return (

            <div className="app">
              {mobile}
              {home}
            	
            </div>
        );
    }
}
   


export default connect()(App);
