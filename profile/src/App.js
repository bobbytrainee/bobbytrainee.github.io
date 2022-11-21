import logo from './logo.svg';
import './App.css';
import Button from "./components/Button";

function App() {
    const handleButtonClick = () => {
        console.log("CLICK")
    }
  return (
   <div>
     <h1>hello</h1>
       <div className='bobbyWrapper'>
           <h3>Bobby page</h3>
           <span>Bobby changes</span>
       </div>
     <div style={{backgroundColor: 'yellow'}}>
         <h3>Ihor</h3>
         <span>Ihors changes</span>
         <Button title='Click me' handleClick={handleButtonClick}/>
     </div>
   </div>
  );
}

export default App;
