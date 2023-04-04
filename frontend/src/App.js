import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Login from './Login/Login';
import Dashboard from './Dashboard/Dashboard';
import Aboutus from './About us/Aboutus';
import Home from './Home/Home';
import Failure from './Failure/Failure';
import Contact from './Contact/Contact';
import Jobs from './Jobs/Jobs';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route exact path="/home" element={<Home/>}/>
        <Route exact path="/dashboard" element={<Dashboard/>}/>
        <Route exact path="/failure" element={<Failure/>}/>
        <Route exact path="/about" element={<Aboutus/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
        <Route exact path="/jobs" element={<Jobs/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
