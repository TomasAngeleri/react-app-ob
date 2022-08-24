import logo from './logo.svg';
import './App.css';
import GreetingStyled from './components/pure/forms/GreetingStyled';
//import TaskListComponent from './components/container/TaskListComponent';
// import ComponenteA from './components/container/ComponenteA';
// import Ejemplo from './hooks/Ejemplo';
// import { Ejemplo2 } from './hooks/Ejemplo2';
// import Ejemplo4 from './hooks/Ejemplo4';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <GreetingStyled name="tomi"></GreetingStyled> 
        {/* 
        <TaskListComponent />
        <ComponenteA />
        <Ejemplo></Ejemplo>
        <Ejemplo2 />
        <Ejemplo4 />*/}
      </header>
    </div>
  );
}

export default App;
