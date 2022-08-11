import logo from './logo.svg';
import './App.css';
// import TaskListComponent from './components/container/TaskListComponent';
import ComponenteA from './components/container/ComponenteA';
import Ejemplo from './hooks/Ejemplo';
import { Ejemplo2 } from './hooks/Ejemplo2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <TaskListComponent /> 
        <ComponenteA />
        <Ejemplo></Ejemplo>*/}
        <Ejemplo2 />
      </header>
    </div>
  );
}

export default App;
