import React from 'react';
import ReactPlayer from 'react-player';
import Login from './login';



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
                  <ReactPlayer url='https://www.youtube.com/embed/jEnd8JIMii4?start=6m12s' volume='0'
                               playing loop='true' />
                </div>
              </div>
               <Login/>
            </div>
        );
    }
}
