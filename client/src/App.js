import './App.css';
import Header from './components/Header';
import Intro from './components/Intro';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <h1>Welcome to my portfolio</h1>
      </header> */}
      <Header />
      <Intro />
      <Projects />
    </div>
  );
}

export default App;
