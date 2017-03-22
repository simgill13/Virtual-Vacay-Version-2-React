import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
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
            <ul>  
                {this.props.history.map(function(vacation){
                    return (
                            <li> 
                                {vacation.city}
                            </li>

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