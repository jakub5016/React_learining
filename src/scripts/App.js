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
  const [itemsSelect, setitemsSelect] = useState(false);

  const handleNightMode = (status) =>{
    setNightMode(status);
  }


  return (
    <div className="App" style={{backgroundColor: nightMode ? "var(--main-backgorund-nightmode)" : "var(--main-backgorund)"}}>
      <Navbar 
        nightMode={nightMode} 
        handleNightMode={handleNightMode} 
        
        itemsSelect={itemsSelect} 
        handleitemsSelect={(status) => {
          setitemsSelect(status)
        }
        }/>
        
      <Content nightMode={nightMode} handleNightMode={handleNightMode}/>
    </div>
    
  );
}

export default App;
