import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      {/* <Register/> */}

     {/* <Login/>   */}
          {/* <About/> */}
      <nav>
                <Link to="/">About</Link>&nbsp;&nbsp;&nbsp;
                <Link to="/register">Register</Link>&nbsp;&nbsp;&nbsp;
                <Link to="/login">Login</Link>
        </nav>
   <Routes>
                 <Route path='/' element={< About />}></Route>
                 <Route path='/register' element={< Register />}></Route>
                 <Route path='/login' element={< Login />}></Route>
   </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
