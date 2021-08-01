import React from "react"
import { Link } from 'react-router-dom'
import Logo from '../assets/img/logo.png'
import LogoDashboard from '../assets/img/menu-icon/6.svg'

function Sidebar(){
    return(
        <>
           {/* Sidebar */}
           <nav className="sidebar">
                <div className="logo d-flex justify-content-between">
                    <a href="index.html">
                        <img src={Logo} alt="dasdas"/>
                    </a>
                    <div className="sidebar_close_icon d-lg-none">
                        <i className="ti-close"></i>
                    </div>
                </div>
                <ul id="sidebar_menu">      
                    <li className="mm-active">
                        <Link to="/" className="has-arrow">
                            <img src={LogoDashboard} alt="asdasd"/>
                            <span>Dashboard</span>
                        </Link>
                    </li>
                    <li className="mm-active">
                        <a className="has-arrow" href="asd">
                            <img src={LogoDashboard} alt="asdasd"/>
                            <span>Data Order</span>
                        </a>
                    </li>
                </ul>
            </nav>
            {/* Sidebar end */}
        </>
    )
}

export default Sidebar