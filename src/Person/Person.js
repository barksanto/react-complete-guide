import React from "react"; // must import react in each component file
import './Person.css';

// this is the preferred way to write functions.
const person = (props) => {
  return (
    <div className="Person">
      {/* click is the name of the property we defined on the My Hobbies */}
      {/* click is the name of the property we dfined in the element in App.js */}
      <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
      {/* This is how we can return what's inside of the <Person></Person> */}
      {/* <p>{props.children}</p> */}
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  )
}

export default person; // exporting the fn DONT FORGET