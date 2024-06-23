import './App.css';
import Header from './components/Header';
import Projects from './components/Projects';
import Home from './components/Home';
import {BrowserRouter as Router, Route, Routes} from'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" Component={Home}/>
          <Route path="/projects" Component={Projects}/>
          <Route path="/blogs" Component={Projects}/>
        </Routes>
      </div>
      
            
    </Router>
  );
}

export default App;
