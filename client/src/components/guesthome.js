import React from 'react';
import ReactPlayer from 'react-player';
import {connect} from 'react-redux';
import Headings from './homeheadings';
import GSearch from './guestsearch';
import GSound from './guestsound';
import GNav from './guestnav';
import GVacations from './gvacations';

import {

toogleGSearch,
toogleGNav
} from '../actions/action';


class GuestHome extends React.Component {
  
   


	 componentDidMount() {

	this.props.dispatch(toogleGSearch());
	this.props.dispatch(toogleGNav());
  	}

    render() {
			
			const internalSearch = null 
      	let Gsearch;
	      if (this.props.Gsearch === true) {
	        Gsearch=<GSearch/>
      	}

      	let Gsound;
      	  if (this.props.GsoundShowing === true ) {
        	Gsound=<GSound/>
      	}

      	let GnavPage;
	      if (this.props.Gnav === true) {
	        GnavPage=<GNav/>
      	}

      	let Gvacations;
        if (this.props.Gvacations === true) {
          Gvacations=<GVacations/>
        }
      
      	return (
		    <div className="home">
		    	{GnavPage}
		    	{Gsearch}
		        <div className="video-background">
		            <div className="video-foreground">
		              <ReactPlayer url={this.props.videoUrl} volume={0}
		               playing loop={true} youtubeConfig={{playerVars: {end: 500 }}}/>
		        	</div>
		   		</div>
		   		<div className="vacationFade">
		   		   {Gvacations}
          		</div>
		        <footer>
		        {Gsound}
		       	</footer>
		    </div>
        )
    }
}


const mapStateToProps = (state) => ({
 videoUrl: state.videoUrl,
 Gsearch:state.Gsearch,
 GsoundShowing:state.GsoundShowing,
 Gnav:state.Gnav,
 Gvacations:state.Gvacations


});


export default connect(mapStateToProps)(GuestHome);