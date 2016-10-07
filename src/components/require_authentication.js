import React, {Component} from 'react'; 
import {connect} from 'react-redux';

export default function(ComposedComponent){
  class Authentication extends Component{
    //this is a class level property
    //anytihng can reference Authentication.contextTypes now
    static contextTypes = {
      router: React.PropTypes.object 
    }

    render(){
      console.log(this.context); 
      return <ComposedComponent {...this.props} /> 
    }
  }

  function mapStateToProps(state){
    return { authenticated: state.authenticated};
  }

  return connect(mapStateToProps)(Authentication); 
}
