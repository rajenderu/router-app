import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Header from './pages/Header';
import Footer from './pages/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/



function App(){
  return (
    <Router>
      <Header />        
        <Routes>
          <Route index component={Home} />
          <Route path='/' element={< Home />}></Route>
          <Route path='/about' element={< About />}></Route>
          <Route path='/contact' element={< Contact />}></Route>
          <Route path='/blog' element={< Blog />}></Route>
          <Route path='*' element={< NoPage />} ></Route>
        </Routes> 
      <Footer />
    </Router>
  )
}
export default App;
//ReactDOM.render(<App />, document.getElementById('root'));
