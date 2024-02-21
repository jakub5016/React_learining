import '../css/App.css';
import Navbar from './Navbar';
import Content from './Content'
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useState } from 'react';


function App() {
  const [nightMode, setNightMode] = useState(false);

  const handleNightMode = (status) =>{
    setNightMode(status);
    console.log(status);
  }

  return (
    <div className="App">
      <Navbar nightMode={nightMode} handleNightMode={handleNightMode}/>
      <Content />
    </div>
    
  );
}

export default App;
