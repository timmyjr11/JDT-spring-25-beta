import './about.css'
import CSS from '../../assets/css.svg'
import HTML from '../../assets/html.svg'
import JS from '../../assets/js.svg'
import PY from '../../assets/py.svg'
import { useState } from 'react'

function About() {
    const [display, setDisplay] = useState('block')
    const [buttonText, setButtonText] = useState('Hide')

    function toggle() {
        if (display == 'none') {
            setDisplay('block')
            setButtonText('Hide')
        } else {
            setDisplay('none')
            setButtonText('Show')
        }
    }

    return (
        <div id="about">
            <h2>
                <button className="toggler" onClick={toggle}>{buttonText}</button>
                About Me
            </h2>
            <div style={{display: display}}>
                <p>
                    I'm a student at Boston University studying Computer Engineering. 
                    I'm currently a member of Hack4Impact. I'm excited to learn more about Robotics and Machine Learning.
                    I have experience in Information Technology, Full Stack Development, and Leadership. 
                    Feel free to contact me at twrigh27@bu.edu!
                </p>
                <br/>
                <h3>My Skills</h3>
                <div className="icons">
                    <img width="60" src={HTML}/>
                    <img width="60" src={CSS}/>
                    <img width="60" src={PY}/>
                    <img width="60" src={JS}/>
                </div>
            </div>
        </div>
    )
}

export default About