import * as React from "react"; 
import {Link} from "react-router-dom";
export default class Header extends React.Component {
    constructor(props : any) {
        super(props)
    }
    public render() {
        return (
            <div className="header"> 
                <h1 className="logo">Hamilton Manalo</h1> 
                <div className="navbar"> 
                    <Link to="/" >
                        <button className="navlink"> Home </button> 
                    </Link>
                    <Link to="/resume">
                        <button className="navlink"> Resume </button>
                    </Link>
                    <Link to="/about">
                        <button className="navlink"> About </button>
                    </Link>
                    <Link to="/portfolio"> 
                        <button className="navlink"> Portfolio  </button>
                    </Link>
                </div>
                
                <hr/>
            </div> 
        )
    }
}