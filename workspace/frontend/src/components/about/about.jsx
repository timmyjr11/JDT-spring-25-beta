import './about.css'
import CSS from '../../assets/css.svg'
import HTML from '../../assets/html.svg'
import JS from '../../assets/js.svg'
import PY from '../../assets/py.svg'
import { useState } from 'react'

function About() {
    const[display, setDisplay] = useState('block')
    const[buttonText, setButtonText] = useState('hide')

    function toggle() {
        if (display == 'none') {
            setDisplay('block')
            setButtonText('Hide')
        } else {
            setDisplay('none')
            setButtonText('show')
        }
    }

        return (
            <div id="about">
                <h2>
                    <button className='toggler' onClick={toggle}>{buttonText}</button>
                    About Me
                </h2>
                <div style={{display: display}}>
                    <p>
                    About me write
                    </p>
                </div>
                <br/>
                <h3>My skills</h3>
                <div className='icons'>
                    <img width="60" src={HTML}/>
                </div>
                <div className='icons'>
                    <img width="60" src={CSS}/>
                </div>
                <div className='icons'>
                    <img width="60" src={JS}/>
                </div>
                <div className='icons'>
                    <img width="60" src={PY}/>
                </div>


            </div>
        )
}

export default About