import './projects.css'

function Projects() {
    return (
        <div id="projects">
            <h2>Projects</h2>
            <div className="project">
                <h4>Project #1</h4>
                <p>Project #1 Description</p>
                <a target="_blank" href="https://github.com/"><button className="github"><img className="github-inline" width="20" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" /> GitHub</button></a>
            </div>
            <div className="project">
                <h4>Project #2</h4>
                <p>Project #2 Description</p>
                <a target="_blank" href="https://github.com/"><button className="github"><img className="github-inline" width="20" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" /> GitHub</button></a>
            </div>
        </div>
    )
}

export default Projects