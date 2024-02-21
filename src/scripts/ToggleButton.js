import { useState } from 'react';
import '../css/Navbar.css'
import handleNightMode from './App'

const ToggleButton = ({nightMode, handleNightMode}) => {
    const [isToggled, setIsToggled] = useState(false);
  
    const handleChange = () => {
      setIsToggled(!isToggled);
      handleNightMode(!nightMode)
    };
  
    return (
      <button onClick={handleChange} className={`toggle-button ${isToggled ? 'on' : 'off'}`}>
        {isToggled ? 'Night mode' : 'Light mode'}
      </button>
    );
  }

export default ToggleButton