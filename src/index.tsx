import * as React from "react"; 
import * as ReactDOM from "react-dom"; 
import {
    BrowserRouter as Router,
    Route,
    Link, Switch
} from "react-router-dom"

import Header from "./components/header";

class App extends React.Component { 
    constructor(props : any) {
        super(props)
    }
    render() {
        return ( 
            <div> 
                <Header>
                
                </Header>
            
            </div>
        )
    }
}

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root')
)