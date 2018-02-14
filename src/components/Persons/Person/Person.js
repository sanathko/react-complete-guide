import React, { Component } from 'react';
import classes from './Person.css';
import withClass from '../../../hoc/withClass1';
import Aux from '../../../hoc/Aux';
import PropTypes from 'prop-types';

class Person extends Component {
  componentDidMount() {
    if (this.props.position === 0) {
      this.inputElement.focus()
    }
  }
  render() {
    return (
      <Aux>
        <p onClick={this.props.click}>I'am {this.props.name} and I am {this.props.age} years old</p>
        <p>{this.props.children}</p>
        <input 
          ref={(input) => { this.inputElement = input}}
          type="text" 
          onChange={this.props.changed} 
          value={this.props.name}/>
      </Aux>
    )
  }
}
//set types of props
Person.PropTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func

}

export default withClass(Person, classes.Person);