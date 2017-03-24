import React from 'react';
import {connect} from 'react-redux';
import {
    fetchinghistory
} from '../actions/action';

 class HistoryResults extends React.Component {
    constructor(props) {
    super(props);
    this.componentDidMount=this.componentDidMount.bind(this)
    }
    componentDidMount() {
        this.props.dispatch(fetchinghistory(this.props.accessToken))
    }

    render() {
        console.log(this.props.name)
        console.log(this.props.history)
        const vacations= this.props.history;
        return (
            <ul className="indexBackground">
                {this.props.history.map(function(vacation,index){
                    return (

                        <div className="container">
                            <div key={index} className="article-div">
                            <section className='bp-heading'>
                            <h4>BOARDING PASS</h4>
                            </section>
                                <h6>DESTINATION</h6>
                                <h2> {vacation.country.toUpperCase()}</h2>
                                <h4 className='h4city'>{vacation.city}</h4>
                                <div className='seat'>
                                <h5 className='seat-text'>SEAT {Math.floor(Math.random() * 30)+1}A</h5>
                                </div>
                                <img className='qrcode'src='qrcode.png'/>
                                <h6 className='desth6'>DESTINATION DESCRIPTION</h6>
                                <p>{vacation.description}</p>
                            </div>
                        </div>
                    )
                })}
            </ul>
        )
    }
}



const mapStateToProps = (state) => ({
 history: state.history,
 accessToken: state.accessToken,
 name: state.name

});

export default connect(mapStateToProps)(HistoryResults)
