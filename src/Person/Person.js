import React from "react"; // must import react in each component file

// this is the preferred way to write functions.
const person = (props) => {
  return (
    <div>
      {/* click is the name of the property we defined on the My Hobbies */}
      <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
      {/* This is how we can return what's inside of the <Person></Person> */}
      <p>{props.children}</p>
    </div>
  )
}

export default person; // exporting the fn DONT FORGET