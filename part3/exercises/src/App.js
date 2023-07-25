import logo from './logo.svg';
import './App.css';
import HobbyIntroduction from './components/Introduction';
import MyProjects from './components/Projects';

function App() {
  return (
    <div className="App">
      <h1>
        My hobby: fishing!
        <HobbyIntroduction/>
        <MyProjects/>
      </h1>
    </div>
  );
}

export default App;
