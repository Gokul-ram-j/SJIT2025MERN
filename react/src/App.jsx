import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";import './App.css'
import Home from './components/Home'
import Gallery from './components/Gallery'
import Signup from './components/Signup'
import Contact from './components/Contact'
import About from './components/About'
import CustomHooks from "./components/CustomHooks";

const Navbar = () => {
  return (
    <nav style={{ display: "flex", gap: "15px", padding: "10px", background: "#eee" }}>
      <Link to="/">Home</Link>
      <Link to="/gallery">Gallery</Link>
      <Link to="/signup">Signup</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/about">About</Link>
      <Link to="/customhooks">Custom Hooks</Link>
    </nav>
  );
};

const App = () => {
  return (
    <Router>
      <Navbar />
      <hr />
      <Routes>
        <Route path="/" element={<Home properties={{ properties: "Hello", sjit: "sjit" }} />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/customhooks" element={<CustomHooks/>} />
      </Routes>
    </Router>
  );
};

export default App
