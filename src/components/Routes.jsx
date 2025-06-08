import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"

export default function NavBar() {
    const [showMenu, setShowMenu] = useState(false)
    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }
    useEffect(() => {
        if(showMenu) {
            document.body.classList.add('no-scroll')
        } else {
            document.body.classList.remove('no-scroll')
        }
    }, [showMenu])
    return (
        <div className="nav-bar">
            <NavLink to="/"><h1 className="logo">be</h1></NavLink>
            <ul className="desk-nav">
                <li><NavLink to="/">about <br /> me</NavLink></li>
                <li><a href="#about">highlight <br /> career</a></li>
                <li><a href="#services">Partner & <br /> events</a></li>
                <li><a href="#contact">contact <br /> me</a></li>
            </ul>
            <ul className="desk-nav extras">
                <li className="nike"></li>
            <div className={`toggle ${showMenu ? "show" : ""}`} onClick={toggleMenu}>
                <span className={`first`}></span>
                <span className={`second`}></span>
            </div>
            </ul>
            <ul className={`mobile-nav ${showMenu ? "show" : ""}`}>
                <li onClick={toggleMenu}><NavLink to="/">about me</NavLink></li>
                <li onClick={toggleMenu}><a href="#about">highlight career</a></li>
                <li onClick={toggleMenu}><a href="#services">Partner & events</a></li>
                <li onClick={toggleMenu}><a href="#contact">contact me</a></li>
            </ul>
        </div>
    )
}