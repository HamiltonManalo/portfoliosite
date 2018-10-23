import * as React from "react"; 
import * as ReactDOM from "react-dom"; 
import {
    BrowserRouter as Router,
    Route,
    Link, Switch
} from "react-router-dom"


export default class Header extends React.Component {
    constructor(props : any) {
        super(props)
    }
    render() {
        return (
            <div> 
                <h1 className='logo'>Hamilton Manalo</h1> 
                <hr/>
            </div> 
        )
    }
}