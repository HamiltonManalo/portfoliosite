import * as React from "react"; 

export default class Main extends React.Component {
    constructor(props : any) {
        super(props)
    }
    public render() {
        return (
            <div className="grid">    
                <div className="page-content"> 
                <h2>Main</h2>
                <p> This site is currently under-construction and being built via TypeScript and React</p>
                </div> 
            </div>
        )
    }
}