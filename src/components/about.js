import "./style/about.css"
function About() {
    return (
        <div className="about" id="about">
            <div className="about_content">
                <div className="Head">
                    <h1>Will Hargrave <hr></hr> Full Stack Engineer</h1>
                    <div className="about-image">
                        <img src={require('./images/profile.jpg')} alt="profile" className='image'></img>
                    </div>
                </div>
                <p>Born in the UK, living in Tokyo, please take a look at some the projects I've been working on!</p>
                <div className="links">
                    <a className="button" href="https://www.linkedin.com/in/will-r-hargrave/">Linkedin</a>
                    <a className="button" href="https://github.com/Willhargrave">Github</a>
                    <a className="button"onClick={() => window.location.href = 'mailto:willhargrave52@gmail.com'}>Contact Me</a>
                </div>
            </div>
        </div>
    )
}


export default About
