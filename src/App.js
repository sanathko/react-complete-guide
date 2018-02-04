import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

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
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    let persons = null;
    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age} 
              key={person.id}
              changed={(event) => this.nameChangedChandler(event, person.id)}/>
          })}
        </div>
      );
      style.backgroundColor = 'red';
    }

    let classes = [];
    if(this.state.persons.length <= 2) {
      classes.push('red');
    }
    if(this.state.persons.length <= 1) {
      classes.push('bold');
    }
    return (
        <div className="App">
          <h1>This is a react app</h1>
          <p className={classes.join(' ')}>This is really working..</p>
          <button 
            style={style} 
            onClick={this.togglePersonsHandler}>Toggle Persons</button>
            {persons}
        </div>
      
    );
  }
}

export default App;
