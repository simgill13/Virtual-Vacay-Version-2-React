import React from 'react';
import {connect} from 'react-redux';
import {
    postVacationData
} from '../actions/action';



 class PostingANewVacay extends React.Component {
   
constructor(props) {
    super(props);
 
    }


    render() {
        return (
            <div className="PostingANewVacay" >
	            <h1> Would you like to add to our virtual vacations list?   </h1>
	            <p> You can add your own virtual vacation here </p>
	            <form className="sumitVacayForm" onSubmit={(event)=> {
	            	 event.preventDefault();
	            	const country = event.target.country.value;
	            	const city = event.target.city.value;
	            	const description= event.target.description.value;
	            	const videoUrl= event.target.videoUrl.value;
	            	const soundUrl= event.target.soundUrl.value;
	            	console.log(country,city,description,videoUrl,soundUrl);
	            	this.props.dispatch(postVacationData(country,city,description,videoUrl,soundUrl));

	            	// all you have to do now is create a 
	            	//1. async action
	            	//2. syn action
	            	//3.update reducer ---and im 90%  sure this functionality will work
	            }}>
		            <input name="country" type="text" placeholder="enter country"  className=""></input>
		            <br/>
		            <input name="city" type="text" placeholder="enter city"  className=""></input>
		            <br/>
		            <input name="description" type="text" placeholder="description"  className=""></input>
		            <br/>
		            <input name="videoUrl" type="text" placeholder="VideoURL"  className=""></input>
		            <br/>
		            <input name="soundUrl" type="text" placeholder="soundURL"  className=""></input>
		            <br/>
		            <br/>
		            <button type="submit" className="submit-post">submit</button>
	            </form>

            </div>
       	);
    }
}

const mapStateToProps = (state) => ({
 
});
export default connect(mapStateToProps)(PostingANewVacay)




