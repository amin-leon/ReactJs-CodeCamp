import logo from './logo.svg';
import './App.css';
import Greet from './components/Gtreet';
import Message from './components/Message';
//import All from './components/Composing';
import Forms from './components/Forms';
import Counter from './components/Counter';
import ClickFunction from './components/ClickFunction';
import ListRenderingParent from './components/ListRenderingParent';
import StylingReact from './components/StylingReact';
import LifecycleA from './components/LifecycleA';
import CounterNumbers from './components/CounterNumbers'
import HoverCounter from './components/HoverCounter'
import ClickTwo from './components/ClickTwo';
import HoverTwo from './components/HoverTwo';
import { UserProvider } from './components/CompentsParent';
import ComponentA from './components/ComponentA';
import ReactHTTP from './components/ReactHTTP';




function App() {
  return (
    <div className="App">
      
      {/* <Greet name="Leon"  heroName='Brue Lee' />
      <Message /> */}
      {/* <All /> */}
      {/* <Form />
      
      <ClickFunction /> */}
      {/* <ListRenderingParent /> */}
      {/* <StylingReact />
      <Forms /> */}

      {/* 
        <p>You are Dev</p>
        </Greet>
      <Greet name="Lamar" heroName='Don Yen'>
      <button>Send</button>
        </Greet>
        <Greet name="Amin" heroName='Jacky Chan'>
      <button>View info</button>
        </Greet>
      <Welcome name="EF" heroName='Don Yen'/> 
      <Welcome name="CD" heroName='Jacky'/> 
      <Welcome name="Ab" heroName='Chan'/>  
      <WithoutJsx /> */}
      {/* <LifecycleA favColor={'Indigo'}/> */} 
      {/* <ClickTwo />
      <HoverTwo />
      <Counter /> */}
      {/* <Counter render={(count, clickToincrease) =>(
      <ClickTwo count={count} clickToincrease={clickToincrease}/>)
      }/>

<Counter render={(count, clickToincrease) =>(
      <HoverTwo count={count} clickToincrease={clickToincrease}/>)
      }/> */}
      {/* <UserProvider value="Leon">
        <ComponentA  />
      </UserProvider> */}
      <ReactHTTP />
    </div>
  )
}
export default App;
