import * as React from "react";
import { render } from "react-dom"
import './navbar.css'
import logo from '../../images/logo_inviso.svg'

export const Navbar = () => {
    const inviso_navbar_button_ref = React.useRef(null)
    const openNavbar = ()  => {
        inviso_navbar_button_ref.current.classList.add('navbar-open')
    }
    const closeNavbar = () : void => {
        inviso_navbar_button_ref.current.classList.remove('navbar-open')
    }
    const handleToggleMobileNavbar = () => {
        const navbar_class_list = inviso_navbar_button_ref.current.classList;
        if([...navbar_class_list].includes('navbar-open')) closeNavbar()
        else openNavbar()
    }

    return (
        <div id="inviso-navbar-container">
            <div id="inviso-navbar-left" className="inviso-navbar-field" >
                <img src={logo} alt="inviso-logo"/>
            </div>
            <div id="inviso-navbar-center" className="inviso-navbar-field" >
                center
            </div>
            <div id="inviso-navbar-right" className="inviso-navbar-field" >
                <div id="inviso-navbar-button-border">
                </div>
                <div id="inviso-navbar-button-container">
                    <div id="inviso-navbar-button" onClick={handleToggleMobileNavbar} ref={inviso_navbar_button_ref}>
                        <div id="navbar-top-bar" className="navbar-bar">
                            
                        </div>
                        <div id="navbar-middle-bar" className="navbar-bar">
                            
                        </div>
                        <div id="navbar-bottom-bar" className="navbar-bar">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

