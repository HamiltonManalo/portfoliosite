import * as React from "react"; 
import {Link} from "react-router-dom";
import {withRouter} from "react-router"

interface IProps {
    name: string
    location: any
}
interface IState {
    menuExpanded: boolean
}

// type Props = IProps & WithRouterProps

class Header extends React.Component<IProps, IState> {
    constructor(props : any) {
        super(props)

        this.state = {
            menuExpanded: false,
        }
    }
    
    public render() {
        const {menuExpanded} = this.state
        
        const menuClass = menuExpanded ? 'menu-button open' : 'menu-button'
        
        return (
            <header className="header">
                <h1 className="header-title">Hamilton Manalo</h1>
                <button className={menuClass} onClick={this.handleToggleMenu}>
                    <div className="menu-button-hamburger" />
                </button>
                {this.menu}
            </header>
        )
    }

    private handleToggleMenu = (): void => {
        this.setState({ menuExpanded: !this.state.menuExpanded})
    }

    private get menu() {
        const {menuExpanded} = this.state

        const menuClass = menuExpanded ? 'app-nav open' : 'app-nav'            

        return (
            <nav className={menuClass}>
                <div className="app-nav--menu">
                    <Link to="/" className={this.linkClassName('')} >Home</Link>
                    <Link to="/resume" className={this.linkClassName('resume')}>Resume</Link>
                    <Link to="/about" className={this.linkClassName('about')}>About</Link>
                    <Link to="/portfolio" className={this.linkClassName('portfolio')}>Portfolio</Link>
                </div>
            </nav>
        )
    }

    private linkClassName = (linkText) => {
        const {location} = this.props

        console.log(location)

        if (location.pathname === `/${linkText}`) {
            return 'app-nav--link active'
        }

        return 'app-nav--link'
    }
}

export default withRouter(Header)