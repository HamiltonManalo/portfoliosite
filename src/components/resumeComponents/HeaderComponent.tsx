import * as React from "react";

class ResumeHeader extends React.PureComponent<iResumeHeaderProps, IResumeComponent> {
    constructor(props) {
        super(props)
        this.state = {
            indent: this.props.indentClass![this.props.indent!]
        }
    }
    public render() {
        return (
            <>
                <p> <span className="keyword"> public class</span><span className="class"> HamiltonsResume {'{'}</span> </p>
                <br />
                <p className="indent1">
                    <span className="keyword"> val </span>
                    <span className="lvariable"> Name = "Hamilton Manalo" </span>
                </p>
                <br />
                <p className="indent1">
                    <span className="keyword"> val </span>
                    <span className="lvariable"> Location = "Los Angeles, California" </span>
                </p>
                <br />
                <p className="indent1">
                    <span className="keyword"> val </span>
                    <span className="lvariable"> Email =<a href="mailto:i@hamiltonmanalo.com" className='lvariable'>"i@hamiltonmanalo.com" </a> </span>
                </p>
            </>
        )
    }
}

interface iResumeHeaderProps extends IResumeComponent {
}

interface IResumeComponent {
    indent?: string,
    indentClass?: Map<string, string>
}

class Val extends React.PureComponent<iResumeHeaderProps, IResumeComponent> {
    constructor(props) {
        super(props)
        this.state = {
            indent: this.props.indentClass![this.props.indent!]
        }
    }
    public render() {
        return (
            <>

            </>
        )
    }
}

