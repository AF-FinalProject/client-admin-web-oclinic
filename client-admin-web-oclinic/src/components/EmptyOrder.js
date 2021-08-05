import React from "react"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"

function EmptyOrder(){
    return(
        <>
            <Navbar/>
            <section className="main_content dashboard_part">
                <Sidebar/>
                <div className="main_content_iner ">
                    <div className="container-fluid p-0">
                        <div className="row justify-content-center">
                            <p style={{color:'red', marginTop:'300px', fontSize:'40px'}}>You don't have an order . . . .</p>                            
                        </div>
                    </div>
                </div>
                <Footer/>
            </section>
        </>
    )
}

export default EmptyOrder