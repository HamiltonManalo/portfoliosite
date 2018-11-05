import * as React from "react"; 

export default class About extends React.Component {
    constructor(props : any) {
        super(props)
    }

    public render() {
        
        return (
            <div className="grid">    

                <div className="social">
                <p>Social Media</p>
                <a href="https://github.com/HamiltonManalo/" className="fab fa-github "/>
                <a href="https://www.linkedin.com/in/hamilton-manalo/" className="fab fa-linkedin"/>
                </div>
                
                <div className="page-content"> 
                    <h2>About</h2>
                    <br/>
                    <br/>
                    <div>
                    <p> <strong>Student</strong> at Brunel University London studying computer science. Pursuing a passion for solving problems, developing process and creating systems gained from experience in industry. The first experience with scripting came from creating complex formulas in spreadsheets at work to automate the redundant work of copying and pasting data from one cell to another. The first major "ah-ha!" moment came after writing a formula that manipulated text based on conditionals. After that came VBA during a massive data migration of several hundred thousand lines of product information and several more scripts to automate tasks for my team. </p>
                    <br/> 
                    <p> After integrating NetSuite at my office I was introduced to "SuiteScript" and the power it offered to automate tasks, manipulate form and create work flows. I began learning JavaScript after work with the intent of using Netsuite to its fullest. I came up with a project I was excited to work on and began consuming information. Even if it had no relevancy to my current problem I was interested in what future problem it would be useful for. After learning NodeJS, Express and Socket.Io to build a web project I decided that pursuing software development full time would lead to the greatest fulfillment in my working life and prepared to make an exit. I applied to schools both local and abroad, when I was accepted to a school in London I decided to jump in head first and moved to London. </p>
                    <br/> 
                    <p> And so far it has been a great experience. I've learned profound amounts in the year I've been in school, became employed as a software developer with an amazing team that has mentored me into a productive member of the organization. Entering into my second year I am looking for an opportunity to work local San Francisco where friends and family are local, and the engineering culture is strong. </p>
                    </div>
                </div> 
            </div>
        )
    }
}