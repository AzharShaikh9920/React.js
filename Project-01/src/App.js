import { useState } from 'react';
import './App.css';
import Alert from './Compoents/Alert';
import About from './Compoents/About';
import Navbar from './Compoents/Navbar';
import TextForm from './Compoents/TextForm';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [BatanText,setBatanText] = useState ('Enable dark Mode');
  const [mode,setMode] = useState('light');
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg : message,
      type : 'danger'
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode=()=>{
    if(mode==="light"){
      setMode("dark")
      document.body.style.backgroundColor = "#042743";
      setBatanText('Disable Dark Mode')
      showAlert("Dark Mode has been Enabled")
    }
    else{
      setMode("light")
      document.body.style.backgroundColor = "white";
      setBatanText('Enable Dark Mode')
      showAlert("Dark Mode has been Disabled")
    }
  }
  return (
    <>
    <Router>
    <Navbar  title="CleanText" about="AboutUS" mode={mode} toggleMode={toggleMode} BatanText={BatanText}/>
    <Alert alert={alert}/>
    <div className="container Home">
    <Routes>
      <Route path='/' element={<TextForm mode={mode} showAlert={showAlert} />}></Route>
      <Route path='/about' element={<About mode={mode} showAlert={showAlert} />}></Route>
    </Routes>
    </div>
    </Router>
    </>
  )
}

export default App;

