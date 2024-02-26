import '../css/Navbar.css';
import ToggleButton from './ToggleButton';
import { useEffect, useRef, useState } from 'react';


const Navbar = (props) => {
    const [opacity, setOpacity] = useState('100%')
    const [isButtonDisabled, setButtonDisabled] = useState(false);
    const [buttonSizeArray, setButtonSizeArray] = useState(0);
    const ref = useRef(null)

    const buttonStyle = {
        opacity: opacity,
    };

    useEffect(() =>{
        setButtonSizeArray(ref.current.clientWidth)
        console.log(buttonSizeArray)
    })

    const backButtonStyle = {
        opacity: Math.abs(opacity.substring(0, opacity.length -1) - 100) + "%",
    };

    return (  

        <nav className="navBar" style={{backgroundColor : props.nightMode ? 'var(--main-nightmode)' : 'var(--main)'}}>
            <div className="barContent" style={{gap : (window.innerWidth/2) - buttonSizeArray}}>
                <div className="leftBar" ref={ref}>
                <button className='element' style={buttonStyle} disabled={isButtonDisabled} onClick={() => {
                        setOpacity("0%"); 
                        // console.log(opacity);
                        setButtonDisabled(true);
                        }
                        }
                    > Home</button>
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
                </div>
                <div className="rightBar">
                    <button className='element' style={backButtonStyle} disabled={!isButtonDisabled} onClick={() => {
                        setOpacity("100%"); 
                        // console.log(opacity);
                        setButtonDisabled(false);
                        console.log(Math.abs(opacity.substring(0, opacity.length -1) - 100))
                        }
                        }> Go 🔙</button>

                    <ToggleButton nightMode={props.nightMode} handleNightMode={props.handleNightMode} />
                </div>
            </div>
        </nav>
    );
}
 

export default Navbar;