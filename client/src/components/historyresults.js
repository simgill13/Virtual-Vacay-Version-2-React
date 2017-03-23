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
        this.props.dispatch(fetchinghistory())
    }

    render() {
        console.log(this.props.history)
        const vacations= this.props.history;
        return (

            <ul className="indexBackground">  
            <h1> Our Virtual Vacations list  </h1>

                {this.props.history.map(function(vacation,index){
                    return (
                        <div className="container">
                            <div key={index} className="article-div">
                                <h2> {vacation.country}</h2>
                                <h4>{vacation.city}</h4>
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
 history: state.history
});

export default connect(mapStateToProps)(HistoryResults)
