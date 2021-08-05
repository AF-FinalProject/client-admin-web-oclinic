import React from "react"
import { Link } from 'react-router-dom'
import Logo from '../assets/img/logo_oclinic.png'
import LogoDashboard from '../assets/img/menu-icon/1.svg'
import LogoDataOrder from '../assets/img/menu-icon/6.svg'

function Sidebar(){
    return(
        <>
           {/* Sidebar */}
           <nav className="sidebar">
                <div className="logo d-flex justify-content-between">
                    <a href="s">
                        <img src={Logo} style={{width:'450px', marginLeft:'-170px', marginTop:'-60px', marginBottom:'-80px'}} alt="dasdas"/>
                    </a>
                    <div className="sidebar_close_icon d-lg-none">
                        <i className="ti-close"></i>
                    </div>
                </div>
                <ul id="sidebar_menu">      
                    <li className="mm-active">
                        <Link to="/" className="has-arrow">
                            <img src={LogoDashboard} alt="logo-dashboard"/>
                            <span style={{fontFamily: 'Atkinson Hyperlegible'}}>Dashboard</span>
                        </Link>
                    </li>
                    <li className="mm-active">
                        <Link to="/order" className="has-arrow">
                            <img src={LogoDataOrder} alt="logo-customer"/>
                            <span style={{fontFamily: 'Atkinson Hyperlegible'}}>Data Order</span>
                        </Link>
                    </li>
                </ul>
            </nav>
            {/* Sidebar end */}
        </>
    )
}

export default Sidebar