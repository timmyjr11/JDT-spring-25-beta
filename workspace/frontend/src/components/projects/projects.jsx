import './projects.css'

function Projects({name, description, github}) {
    return (
        <div id="projects">
            <h4>{name}</h4>
            <p>{description}</p>
            <a target="_blank" href="https://github.com/"><button className="github"><img className="github-inline" width="20" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" /> GitHub</button></a>
        </div>
    )
}

export default Projects