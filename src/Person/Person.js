import React from "react"; // must import react in each component file
// import './Person.css';
import styled from 'styled-components';
import classes from './App.css';


// const StyledDiv = styled.div`
//   width: 60%;
//   margin: 16px auto;
//   border: 1px solid #eee;
//   box-shadow: 0 2px 3px #ccc;
//   padding: 16px;
//   text-align: center;
//   @media (min-width: 500px){
//       width: 450px;
//   }`


// this is the preferred way to write functions.
const person = (props) => {
  // const style = {
  //   '@media (min-width: 500px)': {
  //     width: '450px'
  //   }
  // };

  return (
    // <div className="Person">
    <div className={classes.Person}>
      {/* click is the name of the property we defined on the My Hobbies */}
      {/* click is the name of the property we dfined in the element in App.js */}
      <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
      {/* This is how we can return what's inside of the <Person></Person> */}
      {/* <p>{props.children}</p> */}
      <input type="text" onChange={props.changed} value={props.name} />
      {/* </div> */}
    </div>
  )
}

export default person; // exporting the fn DONT FORGET