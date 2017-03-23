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
        console.log(this.props.history)
        const vacations= this.props.history;
        return (

            <ul className="indexBackground">
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
 history: state.history,
 accessToken: state.accessToken
});

export default connect(mapStateToProps)(HistoryResults)
