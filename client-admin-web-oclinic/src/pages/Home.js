import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { getOrders, deleteOrder } from '../redux/action/actionOrder'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Summary from '../components/Summary'
import Footer from '../components/Footer'


function Home(){

    const data = useSelector((state) => state.home)
    const dispatch = useDispatch()
    const history = useHistory()
    
    useEffect(()=>{
        dispatch(getOrders())
        // eslint-disable-next-line
    },[])

    const formEditOrder = (id) => {
        history.push('/FormEditOrder/'+id)
    }

    const deleteOrderHandle = (id) => {
        dispatch(deleteOrder(id))
    }

    return(
        <>
            <Navbar/>
            <section className="main_content dashboard_part">
                <Sidebar/>
                {/* body */}
                <div className="main_content_iner ">
                    <div className="container-fluid p-0">
                        <div className="row justify-content-center">
                            <Summary/>
                            {/* table End */}
                            <div className="col-12">
                                <div className="QA_section">
                                    <div className="white_box_tittle list_header">
                                        <h4>List Pasien</h4>
                                        <div className="box_right d-flex lms_block">
                                            <div className="serach_field_2">
                                            <div className="search_inner">
                                                <form>
                                                    <div className="search_field">
                                                        <input type="text" placeholder="Search Pasien here..."/>
                                                    </div>
                                                    <button type="submit"> <i className="ti-search"></i> </button>
                                                </form>
                                            </div>
                                            </div>
                                            <div className="add_button ml-10">
                                            <a href="sa" data-toggle="modal" data-target="#addcategory" className="btn_1">Search</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="QA_table mb_30">
                                        <table className="table lms_table_active" style={{borderRadius:'40px 40px 5px 5px'}}>
                                            <thead>
                                            <tr style={{backgroundColor:'red'}}>
                                                <th scope="col">No.</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Address</th>
                                                <th scope="col">Phone Number</th>
                                                <th scope="col">Status Payment</th>
                                                <th scope="col">Status Swab</th>
                                                <th scope="col"><center>Action</center></th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {data.order.map((e,id) =>
                                            <tr key={e.id}>
                                                <th scope="row">{id+1}.</th>
                                                <td>{e.User.name}</td>
                                                <td>{e.User.address}</td>
                                                <td>{e.User.phone_number}</td>
                                                <td>{e.status_payment}</td>
                                                <td>{e.status_swab}</td>
                                                <td>
                                                    <center>
                                                        <button onClick={()=>{formEditOrder(e.id)}} className="btn btn-success btn-sm mb-1" style={{marginRight:'5px', width:'70px', borderRadius:'20px'}}>edit</button>
                                                        <button onClick={()=>{deleteOrderHandle(e.id)}} className="btn btn-danger btn-sm mb-1" style={{width:'70px', borderRadius:'20px'}}>delete</button>
                                                    </center>
                                                </td>
                                            </tr>
                                            )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            {/* table */}


                        </div>
                    </div>
                </div>
                {/* body end*/}

                <Footer/>

            </section>
        </>
    )
}

export default Home