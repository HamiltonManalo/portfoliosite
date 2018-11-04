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
                            <h3 className="portfolio-header"> Settlers of Catan </h3>
                            <p className="portfolio-description"> Settlers of Catan was built using a JavaScript stack, Node, Express and Socket.IO. It features real time updates and interactive gameboard. The front end was built using vanilla JavaScript with the intent of understanding the language underlying the framework prior to investing into learning more about the eco-system in order to start with strong fundementals and a tremendous amount was learned. </p>
                        </div> 
                        <div className="project">
                            <h3 className="portfolio-header"> Cheap Github Connection </h3>
                            <p className="portfolio-description"> Building my website I realized that there was an awesome feature on Github that I couldn't take advantage of, webhooks. I was looking for a project that I could use to learn more about Kotlin and decided to build a service that would check Github for updates to my repo and update my website by downloading, extracting the files, running a React build and uploading it via FTP. This project was open sourced once completed here. </p>
                        </div>
                        <div className="project">
                            <h3 className="portfolio-header"> Portfolio Website </h3>
                            <p className="portfolio-description"> www.HamiltonManalo.com was built as portfolio to show my completed projects and test out the React + Typescript combination. After building my initial project in JavaScript and gaining significant experience in strongly typed languages such as Java and C# I found the lack of types to make development difficult. </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}