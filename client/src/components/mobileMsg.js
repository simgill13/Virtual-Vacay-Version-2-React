import React from 'react';
import {connect} from 'react-redux';



class MobileErrorMsg extends React.Component {
   



    render() {

    	


        return (

            <div className="MobileErrorMsg">

              <div className="mobilepic"> 


                <h3 className='mobiletext'> Due to heavy reliance on video load,this application is only available on browsers for the time being</h3>

              </div>


            	
            </div>
        );
    }
}
   


export default connect()(MobileErrorMsg);
