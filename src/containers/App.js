import React, { Component } from 'react';
import classes from './App.css';
import Person from '../components/Persons/Person/Person'

class App extends Component {
  state = {
    persons: [
      { id: 'dhhd576', name: 'max', age: 28 },
      { id: 'mnjj566', name: 'manu', age: 20 },
      { id: 'qwer454', name: 'stephanie', age: 25 }
    ],
    showPersons: false
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
    let persons = null;
    let btnClass = '';
    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              key={person.id}
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age} 
              changed={(event) => this.nameChangedChandler(event, person.id)}/>
          })}
        </div>
      );
      btnClass = classes.Red;
    }

    let assignedClasses = [];
    if(this.state.persons.length <= 2) {
      assignedClasses.push(assignedClasses.red);
    }
    if(this.state.persons.length <= 1) {
      assignedClasses.push(assignedClasses.bold);
    }
    return (
        <div className={classes.App}>
          <h1>This is a react app</h1>
          <p className={assignedClasses.join(' ')}>This is really working..</p>
          <button
            className={btnClass}
            onClick={this.togglePersonsHandler}>Toggle Persons</button>
            {persons}
        </div>
      
    );
  }
}

export default App;