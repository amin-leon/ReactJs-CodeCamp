import logo from './logo.svg';
import './App.css';
//import Greet from './components/Gtreet';
import Message from './components/Message';
// import WithoutJsx from './components/Without-Jsx';
function App() {
  return (
    <div className="App">
      <Message />

      {/* <Greet name="Leon"  heroName='Brue Lee'>
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
      <Welcome name="Ab" heroName='Chan'/>  */}
      {/* <WithoutJsx /> */}
    </div>
  );
}

export default App;
