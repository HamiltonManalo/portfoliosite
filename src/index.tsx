import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom"
import Header from "./components/header";
import Main from "./components/main";
import Resume from "./components/resume"
import * as React from "react"; 
import * as ReactDOM from "react-dom"; 
import About from "src/components/about";
import Portfolio from "src/components/portfolio";

class App extends React.Component { 
    constructor(props: any) {
        super(props)
    }
    public render() {
        return ( 
            <div> 
                <Header/>
                <Switch> 
                    <Route exact={true} path ="/" component={Main}/>
                    <Route path="/resume" component= {Resume} />
                    <Route path="/about" component= {About} />
                    <Route path="/portfolio" component= {Portfolio} />
                </Switch> 
            
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