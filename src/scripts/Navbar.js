import '../css/Navbar.css';
import ToggleButton from './ToggleButton';
import { useState } from 'react';


const Navbar = (props) => {
    const [opacity, setOpacity] = useState('100%')
    const [isButtonDisabled, setButtonDisabled] = useState(false);
    
    const buttonStyle = {
        opacity: opacity,
    };

    const backButtonStyle = {
        opacity: Math.abs(opacity.substring(0, opacity.length -1) - 100) + "%",
    };

    return (  

        <nav className="navBar" style={{backgroundColor : props.nightMode ? 'var(--main-nightmode)' : 'var(--main)'}}>
            <div className="barContent">




                {/* <button className='element' style={backButtonStyle} disabled={!isButtonDisabled} onClick={() => {
                    setOpacity("0%"); 
                    // console.log(opacity);
                    setButtonDisabled(true);
                    }
                    }> Home</button> */}
                <button className='element' style={buttonStyle} disabled={isButtonDisabled} onClick={() => {
                    setOpacity("0%"); 
                    // console.log(opacity);
                    setButtonDisabled(true);
                    }
                    }
                > Items</button>
                <button className='element' style={buttonStyle} disabled={isButtonDisabled} onClick={() => {
                    setOpacity("0%"); 
                    // console.log(opacity);
                    setButtonDisabled(true);
                    console.log(Math.abs(opacity.substring(0, opacity.length -1) - 100))
                    }
                    }
                > Dates</button>
                

                <button className='element' style={backButtonStyle} disabled={!isButtonDisabled} onClick={() => {
                    setOpacity("100%"); 
                    // console.log(opacity);
                    setButtonDisabled(false);
                    console.log(Math.abs(opacity.substring(0, opacity.length -1) - 100))
                    }
                    }> Go 🔙</button>

                <ToggleButton nightMode={props.nightMode} handleNightMode={props.handleNightMode} />
            </div>
        </nav>
    );
}
 

export default Navbar;