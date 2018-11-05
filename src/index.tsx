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
                <div className="accent">
                    <Switch> 
                        <Route exact={true} path ="/" component={Main}/>
                        <Route path="/resume" component= {Resume} />
                        <Route path="/about" component= {About} />
                        <Route path="/portfolio" component= {Portfolio} />
                        <Route component={NoMatch} />
                    </Switch> 
                </div>
            </div>
        )
    }
}
function NoMatch({location}: any){
    return (
        <div className="page-content">
            <h1>Error 404 Will Robinson!</h1>
            <p>You seem to have gotten lost, please check the navigation bar for directions </p> 
        </div>
    )
}
ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root')
)