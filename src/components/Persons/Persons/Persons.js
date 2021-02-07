import React from 'react'
import Person from './Person/Person'

const persons = (props) => props.persons.map((person, index) => { // if we use more than one argument - must wrap in parenthesis
  // return what we want to map this object into
  return <ErrorBoundary key={person.id}>
    <Person
      click={() => this.deletePersonhandler(index)}
      name={person.name}
      age={person.age}
      changed={(event) => this.nameChangedHandler(event, person.id)} />
  </ErrorBoundary>
})}
;
export default Persons
