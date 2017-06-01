import React from 'react';
import {connect} from 'react-redux';
import {toogleNav,hideVacayList,toogleSearch,allVacationsCall,searchRequest,soundCloudIcon,toogleGSearch,
toogleGNav,hideShowGVacayList,GsoundCloudIcon} from '../actions/action';
import $ from 'jquery';




 class GVacations extends React.Component {

  constructor(props) {
    super(props);
    this.close = this.close.bind(this);
    this.handleVacationClicked = this.handleVacationClicked.bind(this)
  }

  componentDidMount() {
    this.props.dispatch(allVacationsCall());
  }

  close(){
    this.props.dispatch(toogleGSearch());
    this.props.dispatch(toogleGNav());
    this.props.dispatch(hideShowGVacayList());
   
  }
  handleVacationClicked(vacation){

    this.props.dispatch(searchRequest(vacation.country));
    this.props.dispatch(GsoundCloudIcon());
    this.props.dispatch(toogleGSearch());
    this.props.dispatch(toogleGNav());
    this.props.dispatch(hideShowGVacayList());


  }
 
 
    render() {

             return (
                <ul className="vacationsComponent">
                  {this.props.arrayofVacays.map((vacation,index)=>{
                    return (
                        <div onClick={(event) => {this.handleVacationClicked(vacation)}} className="vacayContainer">
                            <div className="innerv" key={index}>
                                <h2  className="text country" > {vacation.country.toUpperCase()}</h2>
                                <h4 className='text'>{vacation.city}</h4>       
                            </div>
                        </div>
                    )
                  })}
                <br/>
                  <button className="vacation-link close" onClick={this.close}> Close </button>
                <br/>
                </ul>
        );
    }
}

const mapStateToProps = (state) => ({
arrayofVacays:state.arrayofVacays,
GsoundShowing:state.GsoundShowing,
});

export default connect(mapStateToProps)(GVacations)






