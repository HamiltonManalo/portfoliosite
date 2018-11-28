import * as React from "react"; 

export default class Portfolio extends React.Component {
    constructor(props : any) {
        super(props)
    }
    public render() {
        return (
            <div className="projects">
                <div className="project">
                    <div className="project-image">                                            
                        <img src="/res/catan.jpg" />
                    </div>
                    <div className="project-details">
                        <h3 className="project-name">Settlers of Catan</h3>
                        <a className="blue-button" href="https://github.com/HamiltonManalo/Catan" title="See Settlers of Catan Code on GitHub">
                            <span className="blue-button--icon fab fa-github" />
                            See the Code
                        </a>
                        <p className="project-description">Settlers of Catan was built using a JavaScript stack, Node, Express and Socket.IO. It features real time client updates and interactive gameboard. This was the first language/project I developed. I chose to use vanilla JavaScript on the front to avoid adding undue abstraction to the process of learning my first programming language which built a rich understanding of both coding and the quarks of the language.</p>
                    </div>
                </div> 
                <div className="project">
                    <div className="project-image">
                        <img src="/res/cgc-logo.jpg"/>
                    </div>
                    <div className="project-details">
                        <h3 className="project-name">Cheap Github Connection</h3> 
                        <a href="#" className="blue-button">
                            <span className="blue-button--icon fab fa-github"/>
                            See the Code
                        </a>
                        <p className="project-description">Building my website I realized that there was an awesome feature on Github that I couldn't take advantage of, webhooks. I was looking for a project that I could use to learn more about Kotlin and decided to build a service that would check Github for updates to my repo and update my website by downloading, extracting the files, running a React build and uploading it via FTP. This project will be open sourced once completed.</p>
                    </div>
                </div>
                <div className="project">
                    <div className="project-image">
                        <img src="/res/website.jpg" />
                    </div> 
                    <div className="project-details">
                        <h3 className="project-name">Portfolio Website</h3>
                        <a className="projectbutton" href="https://github.com/HamiltonManalo/portfoliosite/">
                            <span className="blue-button--icon fab fa-github" />
                            See the Code
                        </a>
                        <p className="project-description">Building something is the best way to learn. Since my experience building settlers of catan I've had  interest in JavaScript with static types and a small greenfield project offered up the perfect opportunity. Built using TypeScript and React this portfolio site served as an introduction to new technologies and modern web design patterns.</p>
                    </div>
                </div>
            </div>
        )
    }
}