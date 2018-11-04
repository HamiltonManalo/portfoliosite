import * as React from "react"; 

export default class Resume extends React.Component {
    constructor(props : any) {
        super(props)
    }
    public render() {
        return (
            <div> 
                                <p className="page-content">Resume</p>
                <div className="page-content">
                <div className="codebox">
                                <p className="keyword"> public class </p><p className="class"> HamiltonsResume  {'{'} <br/> </p> 
                        
                        <p className="indent1"> 
                            <span className="keyword"> val </span> 
                            <span className="lvariable"> Name = "Hamilton Manalo" </span> 
                        </p>
                        <br/>
                        <p className="indent1"> 
                            <span className="keyword"> val </span> 
                            <span className="lvariable"> Location = "Los Angeles, California" </span> 
                        </p> 
                        <br/>
                        <p className="indent1"> 
                            <span className="keyword"> val </span> 
                            <span className="lvariable"> Email = "i@hamiltonmanalo.com" </span>
                        </p>
                        <br/>
                        <br/>
                        <p className="indent1"> 
                            <span className="keyword">companion object </span> 
                            <span className="lvariable">currentPosition = Description( </span> 
                        </p>
                        <br/>
                        <p className="indent2">
                            <span className='string'><span className="parametername">jobtitle: </span>"Junior Software Developer"</span>
                            <span className="keyword">,</span>&emsp;&nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                            <span className='string'><span className="parametername">company: </span>"DirekTek LTD"
                            <span className="keyword">,</span>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;<span className="parametername">dates: </span>"2017 - Present"</span>
                            <span className="keyword">,</span>
                        </p> 
                        <br/>
                        <p className="indent2">
                            <span className="string"><span className="parametername">stack: </span>"C#, .NET/Core &amp; SQL"</span>
                            <span className="keyword">,</span>
                        </p>
                        <br/>
                        <br/>
                        <p className="indent2">
                            <span className="parametername">bullet1: </span>
                            <span className="string">"* Practiced Test Driven Development using MStest Suite and MOQ for dependency mocking"</span> 
                            <span className="keyword">,</span>
                        </p>
                        <br/>
                        <p className="indent2">
                            <span className="parametername">bullet2: </span>
                            <span className="string">"* Designed and implemented EDI UN/EDIFACT extension to internal shipping application."</span>
                            <span className="keyword">,</span>
                        </p>
                        <br/>
                        <p className="indent2">
                            <span className="parametername">bullet3: </span>
                            <span className="string">"* Redesigned SQL stored procedure to move running time from 3 minutes to 11 seconds."</span>
                            <span className="keyword">,</span>
                        </p>
                        <br/>
                        <p className="indent2"> 
                            <span className="parametername">bullet4: </span>
                            <span className="string">"* Automated Sales Order releasing."</span>
                        </p>
                        <p>
                            <span className="lvariable">)</span> 
                        </p>
                        <br/>
                        <p className="indent1"> 
                            <span className="keyword">companion object </span> 
                            <span className="lvariable">previousPosition = Description( </span> 
                        </p>
                        <br/>
                        <p className="indent2">
                            <span className='string'><span className="parametername">jobtitle: </span>"E-Commerce Mananger"</span>
                            <span className="keyword">,</span>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;
                            <span className='string'><span className="parametername">company: </span>"MVP Sports, Inc"
                            <span className="keyword">,</span>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;<span className="parametername">dates: </span>"2007 - 2017"</span>
                            <span className="keyword">,</span>
                        </p> 
                        <br/>
                        <p className="indent2">
                            <span className="keyword"><span className="parametername">stack: </span>null</span>
                            <span className="keyword">,</span>
                        </p>
                        <br/>
                        <br/>
                        <p className="indent2">
                            <span className="parametername">bullet1: </span>
                            <span className="string">"* Promotions in a 10-year span moving from warehouse floor to E-Commerce Manager."</span>
                            <span className="keyword">,</span> 
                        </p>
                        <br/>
                        <p className="indent2">
                            <span className="parametername">bullet2: </span>
                            <span className="string">"* in development and provided administration for NetSuite ERP/WMS systems."</span>
                            <span className="keyword">,</span>
                        </p>
                        <br/>
                        <p className="indent2">
                            <span className="parametername">bullet3: </span>
                            <span className="string">"* Automated repetitive Excel tasks saving data entry employees 3 hours daily."</span>
                            <span className="keyword">,</span>
                        </p>
                        <br/>
                        <p className="indent2"> 
                            <span className="parametername">bullet4: </span>
                            <span className="string">"* Built high performing, successful teams through intelligent hiring and coaching."</span>
                            <span className="lvariable">)</span> 
                        </p>
                        <br/>
                        <br/>
                        <p className="indent1"> 
                            <span className="keyword">companion object </span> 
                            <span className="lvariable">school1 = Description( </span> 
                        </p>
                        <br/>
                        <p className="indent2">
                            <span className='string'><span className="parametername">location: </span>"London, United Kingdom"</span>
                            <span className="keyword">,</span>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                            <span className='string'><span className="parametername">name: </span>"Brunel University London"
                            <span className="keyword">,</span>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;<span className="parametername">dates: </span>"2017 - Present"</span>
                            <span className="keyword">,</span>
                        </p> 
                        <br/>
                        <br/>
                        <p className="indent2">
                            <span className="parametername">degree: </span>
                            <span className="string">"BSc Hons Computer Science"</span> 
                            <span className="keyword">,</span>
                        </p>
                        <br/>
                        <p className="indent2">
                            <span className="parametername">awards: </span>
                            <span className="string">"Year 1 Project award for best design/implementation"</span> 
                            <span className="keyword">,</span>
                        </p>
                        <br/>
                        <p className="indent2">
                            <span className="parametername">gpa: </span>
                            <span className="string">"3.8"</span>
                            <span className="keyword">,</span>
                        </p>
                        <br/>
                        <p className="indent2">
                            <span className="parametername">courses: </span>
                            <span className="string">"Noteworthy Courses: Logic &amp; Computing (A+), Introductory Java (A), Data &amp; Information (A+), Algorithms and their applications (Current), Operating Systems &amp; Networks (Current)"</span>
                            <span className="lvariable">)</span> 
                        </p>
                        <br/>
                        <br/>
                        <p className="indent1"> 
                            <span className="keyword">companion object </span> 
                            <span className="lvariable">school2 = Description( </span> 
                        </p>
                        <br/>
                        <p className="indent2">
                            <span className='string'><span className="parametername">location: </span>"Los Angeles, California"</span>
                            <span className="keyword">,</span>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                            <span className='string'><span className="parametername">name: </span>"Los Angeles City College"
                            <span className="keyword">,</span>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span className="parametername">dates: </span>"Graduated 2011"</span>
                            <span className="keyword">,</span>
                        </p> 
                        <br/>
                        <br/>
                        <p className="indent2">
                            <span className="parametername">degree: </span>
                            <span className="string">"Associate Arts Humanities"</span> 
                            <span className="keyword">,</span>
                        </p>
						<br/>
						<p className="indent2">
                            <span className="parametername">awards: </span>
                            <span className="string">"Deans List"</span> 
                            <span className="keyword">,</span>
                        </p>
                        <br/>
                        <p className="indent2">
                            <span className="parametername">gpa: </span>
                            <span className="string">"3.25"</span>
                            <span className="keyword">,</span>
                        </p>
                        <br/>
                        <p className="indent2">
                            <span className="parametername">courses: </span>
                            <span className="string">"Noteworthy Courses: Inductive Logic, Statistics, English 103: Critical Reading &amp; Thinking "</span>
                            <span className="lvariable">)</span> 
                        </p>
                        <br/>
                        <br/>
                        <p className="indent1">
                            <span className="keyword">val </span> 
                            <span className="lvariable">projects = listOf(</span>
                        </p>
                        <br/>
                        <p className="indent2">
                            <span className="string">"EDI UN/EDIFACT Shipping Integrating C# Library, Generating Models and integrating process into existing shipping software to generate shipping labels from data saving 2 hours daily of labor"</span>
                            <span className="keyword">,</span>
                        </p>
                        <br/>
                        <p className="indent2">
                            <span className="string">"NetSuite Integrations Integrated eBay and Walmart sales channels with NetSuite using 3rd party connector services to create a single source of truth for Inventory and product details"</span>
                            <span className="keyword">,</span>
                        </p>
                        <br/>
                            <p className="indent2">
                            <span className="string">"Settlers of Catan Designed and built using JavaScript and NodeJS as first significant development project. Multiplayer online game, providing real time updates with socket.io"</span>
                            <span className="keyword">,</span>
                        </p>
                        <br/>
                            <p className="indent2">
                            <span className="string">"Mormur a Q&amp;A Educational platform being developed in Java, SQL and React with University professor"</span>
                            <span className="lvariable">)</span> 
                        </p>
                        <br/>
                        <br/>
                        <p className="indent1">
                            <span className="keyword">val </span> 
                            <span className="lvariable">additionalExperience = listOf(</span>
                        </p>
                        <br/>
                        <p className="indent2">
                            <span className="string">"Instructor (2003 – 2005): Computer Science Dept. Teaching Assistant."</span>
                            <span className="keyword">,</span>
                        </p>
                        <br/>
                        <p className="indent2">
                            <span className="string">"Brunel Peer Assisted Learning Leader: Guiding Year 1 students through their first academic year."</span>
                            <span className="keyword">,</span>
                        </p>
                        <br/>
                        <p className="indent2">
                            <span className="string"> "ASOS Hackoween: Developed a flash sale concept to sell fragmented inventory to target customers using Rec/Fit analysis systems"</span>
                        <span className="lvariable">)</span> 
                        </p>
                        <br/>
                        <br/>
                       
                        <p className="indent1">
                            <span className="keyword">val </span> 
                            <span className="lvariable">languagesAndTechnologies = listOf(</span>
                        </p>
                        <br/>
                        <p className="indent2">
                            <span className="lvariable">listOf{'<'}ProficientLanguages{'>'}(</span>
                            <span className="string">"Java"</span>
                            <span className="keyword">,</span>
                            <span className="string">"C# .NET/Core"</span>
                            <span className="keyword">,</span>
                            <span className="string">"JavaScript"</span>
                            <span className="keyword">,</span>
                            <span className="string">"SQL"</span>
                            <span className="lvariable">)</span> 
                        </p>
                        <br/>
                        <p className="indent2">
                            <span className="lvariable">listOf{'<'}IntermediateLanguages{'>'}(</span>
                            <span className="string">"Python"</span>
                            <span className="keyword">,</span>
                            <span className="string">"Kotlin"</span>
                            <span className="keyword">,</span>
                            <span className="string">"NodeJS"</span>
                            <span className="lvariable">)</span> 
                        </p>
                        <br/>
                        <p className="indent2">
                            <span className="lvariable">listOf{'<'}Software{'>'}(</span>
                            <span className="string">"Visual Studio 2017/Code"</span>
                            <span className="keyword">,</span>
                            <span className="string">"SQL Server Manager Studio"</span>
                            <span className="keyword">,</span>
                            <span className="string">"Intelli J."</span>
                            <span className="lvariable">)</span> 
                            <br/>
                        </p>
                        <p className="indent2">
                            <span className="lvariable">listOf{'<'}Database{'>'}(</span>
                            <span className="string">"MS-SQL"</span>
                            <span className="keyword">,</span>
                            <span className="string">"MySql"</span>
                            <span className="keyword">,</span>
                            <span className="string">"MongoDB"</span>
                            <span className="lvariable">)</span> 
                            <br/>
                        </p>
                        <p className="indent2">
                            <span className="lvariable">listOf{'<'}ORMs{'>'}(</span>
                            <span className="string">"NHibernate"</span>
                            <span className="keyword">,</span>
                            <span className="string">"Hibernate/JPA"</span>
                            <span className="keyword">,</span>
                            <span className="string">"Entity Framework Core"</span>
                            <span className="lvariable">)</span> 
                            <br/>
                        </p>
                        <p className="indent2">
                            <span className="lvariable">listOf{'<'}Dependency Injection{'>'}(</span>
                            <span className="string">"Autofac"</span>
                            <span className="lvariable">)</span> 
                        <span className="lvariable">)</span> 
                        </p>
                        <br/>
                        <br/>
                        <p className="indent1">
                            <a href="mailto:i@hamiltonmanalo.com">
                            <span className="keyword">public fun</span>
                            <span className="kfundec"> contact</span> 
                            <span className="lvariable">(message: String) = email.create(message) </span>
                            </a>
                        </p>
                        <br/>
                        <p className="lvariable">{'}'} </p> 
                     </div>
                </div>
            </div> 
        )
    }
}