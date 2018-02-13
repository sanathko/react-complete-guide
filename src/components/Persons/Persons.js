import React, { Component } from 'react';

import Person from './Person/Person';

class Persons extends Component {
  constructor(props) {
    super(props);
    console.log('CREATE Persons.js constructor ',props);
  }

  componentWillMount() {
    console.log('CREATE Persons.js component will mount');
  }
  
  componentDidMount() {
    console.log('CREATE Persons.js component did mount');
  }

  componentWillReceiveProps(nextProps) {
    console.log('UPDATE Persons.js inside component will receivce props',nextProps);
  }

  //THIS IS IMPORTANT. STOPS UNNESSASARY UPDATES CAN HELP TO IMPROVE PERFORMANCE
  shouldComponentUpdate(nextProps, nextState) {
    console.log('UPDATE Persons.js inside should component update',nextProps, nextState);
    //return true;//update continues (false and update will stop)
    nextProps.persons = this.props.persons;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('UPDATE Persons.js inside component will update',nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('UPDATE Persons.js inside component did update');
  }

  render() {
    console.log('Persons.js render');
    return this.props.persons.map((person, index) => {
      return <Person 
        key={person.id}
        click={() => this.props.clicked(index)}
        name={person.name}
        age={person.age} 
        changed={(event) => this.props.changed(event, person.id)}/>
    })
  }
}

export default Persons;