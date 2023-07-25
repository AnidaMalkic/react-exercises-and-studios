import logo from './logo.svg';
import './App.css';
import HobbyIntroduction from './components/Introduction';

function App() {
  return (
    <div className="App">
      <h1>
        My hobby: fishing!
        <HobbyIntroduction/>
      </h1>
    </div>
  );
}

export default App;
