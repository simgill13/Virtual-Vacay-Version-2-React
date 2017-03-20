import React from 'react';
import ReactPlayer from 'react-player';




export default class Home extends React.Component {
    // constructor(props) {
    //     super(props);
    // }




    render() {
             return (

            <div className="home">
            <h1 className='title'> TIMEout</h1>
            <h4 className='motto'> For when you need a virtual vacation</h4>
              <div className="video-background">
                <div className="video-foreground">
                <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' volume='0' playing />
                </div>
              </div>
              <input type="text" placeholder="search location" className="main-input"></input>
              <button type="submit">Search</button>
            </div>
        );
    }
}
