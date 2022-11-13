import React,{useContext, useState, createContext} from 'react'
import C1Hooks from './C1Hooks'

const UserContext = createContext();

function Component1() {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <UserContext.Provider value={user}>
      <C1Hooks />
    </UserContext.Provider>
  );
}

export default Component1
