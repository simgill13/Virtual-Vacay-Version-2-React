
import React from 'react';
import {connect} from 'react-redux';
import {fetchHouses} from '../actions/action'

class App extends React.Component {
   

   componentDidMount() {
     this.props.dispatch(fetchHouses());
   }

    render() {
         console.log(this.props.title)
        return (

            <div className="app">
               <h1> TEST </h1>
               <h2>{this.props.title}</h2>
            </div>
        );
    }
}
    const mapStateToProps = (state) => ({
      title: state.title

    })


export default connect(mapStateToProps)(App);
