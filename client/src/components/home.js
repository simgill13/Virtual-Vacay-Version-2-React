import React from 'react';




export default class Home extends React.Component {
    // constructor(props) {
    //     super(props);
    // }




    render() {
             return (

            <div className="cheese">
            <h1> TIMEout</h1>
            <h4> For when you need a virtual vacation</h4>
           <video playsinline autoplay muted loop poster="polina.jpg" id="bgvid" >
            <source src="polina.webm" type="video/webm">
            <source src="polina.mp4" type="video/mp4">
            </video>
             
            </div>
        );
    }
}






