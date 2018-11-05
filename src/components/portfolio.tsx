import * as React from "react"; 

export default class Portfolio extends React.Component {
    constructor(props : any) {
        super(props)
    }
    public render() {
        return (
            <div className="grid">    
                <div className="page-content"> 
                    <h2>Portfolio</h2>
                    <div className="projects">
                        <div className="project">
                            <img src="/res/catan.jpg" className="projectimgr"/>
                            <h3 className="portfolio-header"> Settlers of Catan </h3>
                            <a href="https://github.com/HamiltonManalo/Catan" className="fab fa-github "/>
                            <p className="portfolio-description"> Settlers of Catan was built using a JavaScript stack, Node, Express and Socket.IO. It features real time updates and interactive gameboard. This was the first language/project I developed. I chose to use vanilla JavaScript on the front to avoid adding undue abstraction to the process of learning my first programming language which built a rich understanding of both coding and the quarks of the language. </p>
                        </div> 
                        <div className="project">
                            <img src="/res/cgc-logo.jpg" className="projectimgl"/>
                            <h3 className="portfolio-header"> Cheap Github Connection </h3> 
                            <a href="#" className="fab fa-github "/>
                            <p className="portfolio-description"> Building my website I realized that there was an awesome feature on Github that I couldn't take advantage of, webhooks. I was looking for a project that I could use to learn more about Kotlin and decided to build a service that would check Github for updates to my repo and update my website by downloading, extracting the files, running a React build and uploading it via FTP. This project was open sourced once completed here. </p>
                        </div>
                        <div className="project">
                            <img src="/res/website.jpg" className="projectimgr"/>
                            <h3 className="portfolio-header"> Portfolio Website </h3>
                            <a href="https://github.com/HamiltonManalo/portfoliosite/" className="fab fa-github "/>
                            <p className="portfolio-description"> www.HamiltonManalo.com was built as portfolio to show my projects and test out the React + Typescript combination. After building catan with mostly vanilla JavaScript and gaining significant experience in strongly typed languages such as Java and C# I found that I missed the confidence of a strongly typed environment.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}