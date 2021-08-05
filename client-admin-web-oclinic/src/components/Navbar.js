import React from "react"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import { resetStore } from '../redux/action/actionLogout'

function Navbar(){

    const dispatch = useDispatch()
    const history = useHistory()

    const logout = () => {
        localStorage.removeItem('access_token')
        dispatch(resetStore())
        history.push('/login')
    }

    return(
        <>
            {/* Navbar End */}
            <div className="container-fluid no-gutters" style={{position:'fixed', marginTop:'-20px', zIndex:'1'}}>
                <div className="row">
                    <div className="col-lg-12 p-0">
                        <div className="header_iner d-flex justify-content-between align-items-center">
                            <div className="sidebar_icon d-lg-none">
                                <i className="ti-menu"></i>
                            </div>
                            <div className="serach_field-area"></div>
                            <div className="header_right d-flex justify-content-between align-items-center">
                                <div className="header_notification_warp d-flex align-items-center">
                                    <li>
                                        <button className="btn btn-danger" onClick={()=>{logout()}} style={{cursor:'pointer'}}>Log Out</button>
                                    </li>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Navbar End */}
        </>
    )
}

export default Navbar