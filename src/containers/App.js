import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass'

class App extends Component {
  constructor(props) {
    super(props);
    console.log('App.js constructor ',props);
    this.state = {
      persons: [
        { id: 'dhhd576', name: 'max', age: 28 },
        { id: 'mnjj566', name: 'manu', age: 20 },
        { id: 'qwer454', name: 'stephanie', age: 25 }
      ],
      showPersons: false
    }
  }

  componentWillMount() {
    console.log('App.js component will mount');
  }
  
  componentDidMount() {
    console.log('App.js component did mount');
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons]; //creates a new array
    persons.splice(personIndex, 1)
    this.setState({persons})
  }

  nameChangedChandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    // const person = Object.assign({}, this.state.persons[personIndex])
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    console.log('App.js render');
    let persons = null;
    
    if(this.state.showPersons) {
      persons = <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedChandler}/>
    }

    return (
        <WithClass classes={classes.App}>
            <Cockpit 
              showPersons={this.state.showPersons}
              persons={this.state.persons}
              clicked={this.togglePersonsHandler}/>
            {persons}
        </WithClass>
    );
  }
}

export default App;
