
import React from 'react';
import {connect} from 'react-redux';
import {fetchHouses} from '../actions/action'
import Home from '../components/home';

class App extends React.Component {
   

   componentDidMount() {
     this.props.dispatch(fetchHouses());
   }

    render() {
       
        return (

            <div className="app">
              
               <h2> Connection to Mongo - {this.props.title}</h2>
               <Home />
            </div>
        );
    }
}
    const mapStateToProps = (state) => ({
      title: state.title

    })


export default connect(mapStateToProps)(App);
