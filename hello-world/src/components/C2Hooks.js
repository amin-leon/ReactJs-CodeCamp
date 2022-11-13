import React,{useContext, useState, createContext} from 'react'
import {UserContext} from './Component1'

function C2Hooks() {

    const user = useContext(UserContext);
  
    return (
      <>
        <h2>{`Hello ${user} again!`}</h2>
      </>
    );
  }

export default C2Hooks
