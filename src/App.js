import "./App.css";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Home from "./components/Home";
import Blogs from "./components/Blogs";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/projects" Component={Projects} />
          <Route path="/blogs" Component={Blogs} />
          <Route path="/contact" Component={Contact} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
