import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from "./components/Navbar.js";
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#01081c';
      document.body.style.color = 'rgb(222 220 255';
      showAlert(" Dark mode is enables.", "success")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert(" Light mode is enables.", "success")
    }
  }
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar title="TextUtils" about="About Us" mode={mode} toggleMode={toggleMode} />
        {/* <Navbar />  In this case default props value will we come on webpage. */}
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="about" element={<About />} />
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter your text to analyze." mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </div >
  );
}

export default App;