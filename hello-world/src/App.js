import logo from './logo.svg';
import './App.css';
import Greet from './components/Gtreet';
import Message from './components/Message';
//import All from './components/Composing';
import Form from './components/Form';
import Counter from './components/Counter';
import ClickFunction from './components/ClickFunction';
import ListRenderingParent from './components/ListRenderingParent';
function App() {
  return (
    <div className="App">
      {/* <Greet name="Leon"  heroName='Brue Lee' />
      <Message /> */}
      {/* <All /> */}
      {/* <Form />
      <Counter />
      <ClickFunction /> */}
      <ListRenderingParent />
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
    </div>
  )
}
export default App;
