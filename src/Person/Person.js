import React from "react"; // must import react in each component file

// this is the preferred way to write functions.
const person = () => {
  return <p>I'm a person and I am {Math.floor(Math.random() * 30)} years old!</p>
}

export default person; // exporting the fn DONT FORGET