import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
//import WithClass from '../hoc/WithClass'
import Aux from '../hoc/Aux'
import withClass from '../hoc/withClass1' //this is just a function not a component

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
      showPersons: false,
      toggleClickedCounter: 0
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
    // this.setState({
    //   showPersons: !doesShow, 
    //   toggleClicked: this.state.toggleClicked + 1
    // });

    this.setState((previousState, props) => {
      return {
        showPersons: !doesShow, 
        toggleClicked: previousState.toggleClicked + 1
      }
    })
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
        <Aux>
            <Cockpit 
              showPersons={this.state.showPersons}
              persons={this.state.persons}
              clicked={this.togglePersonsHandler}/>
            {persons}
        </Aux>
    );
  }
}

export default withClass(App, classes.App);
