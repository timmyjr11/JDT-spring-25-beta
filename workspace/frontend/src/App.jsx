import Navbar from './components/navbar/navbar'
import Profile from './components/profile/profile'
import Projects from './components/projects/projects'
import Experiences from './components/experiences';
import About from './components/about/about'
import './App.css';

function App() {
    return (
        <>
        <Navbar/>
        <Profile/>
        <About/>
        <div id="projects">
            <h2>Projects</h2>
            <Projects name="Project 1 Name" description="Project deis here"></Projects>
        </div>
        <div id='exp'>
            <h2>Experiences</h2>
            <Experiences 
                title="Job Title" 
            info="Company Name, Location, State" 
            dates="Dates - Dates" 
            bullets={["Point 1", "Point 2", "Point 3"]}
            />
            <Experiences 
                title="Job Title" 
            info="Company Name, Location, State" 
            dates="Dates - Dates" 
            bullets={["Point 1", "Point 2", "Point 3"]}
            />
        </div>
        </>
    )
}

export default App