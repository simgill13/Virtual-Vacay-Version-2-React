import React from 'react';
import ReactPlayer from 'react-player';
import {connect} from 'react-redux';
import Headings from './homeheadings';
import Nav from './nav';
import Login from './login';
import Search from './search';
import Sound from './sound';
import Vacations from './vacations';

import {

} from '../actions/action';


class Home extends React.Component {
  
  

	

    render() {
    	let headings;
      	if (this.props.showHeading === false) {
        	headings=<Headings/>
      	}
      	let login;
      	if (this.props.login === false) {
        	login=<Login/>
      	}
 		let navPage;
	      if (this.props.nav === true) {
	        navPage=<Nav/>
      	}
      	let search;
	      if (this.props.search === true) {
	        search=<Search/>
      	}
      	let sound;
      	  if (this.props.soundShowing === true ) {
        	sound=<Sound/>
      	}
      	let vacations;
        if (this.props.vacations === true) {
          vacations=<Vacations/>
        }
      	return (
		    <div className="home">
		    	{navPage}
		    	{headings}
		        <div className="video-background">
		            <div className="video-foreground">
		              <ReactPlayer url={this.props.videoUrl} volume={0}
		               playing loop={true} youtubeConfig={{playerVars: {end: 500 }}}/>
		        	</div>
		   		</div>
		   		{search}
		   		{login}
          <div className="vacationFade">
		   		   {vacations}
          </div>
		        <footer>
		         {sound}
		       	</footer>
		    </div>
        )
    }
}


const mapStateToProps = (state) => ({
 videoUrl: state.videoUrl,
 showHeading: state.showHeading,
 login:state.login,
 nav:state.nav,
 soundShowing: state.soundShowing,
 search:state.search,
 vacations:state.vacations
});


export default connect(mapStateToProps)(Home);