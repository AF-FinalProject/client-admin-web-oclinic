import React, { useEffect, useRef } from "react"
import { Link, useHistory, useParams } from 'react-router-dom'
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import Footer from "../components/Footer"
import Loading from "../components/Loading"
import { useDispatch, useSelector } from "react-redux"
import { getOrderDetail, resetOrderDetail, editOrder }  from '../redux/action/actionOrder'

function DetailOrder () {

    const params = useParams()
    const dispatch = useDispatch()
    const history = useHistory()
    const dataOrder = useSelector((state) => state.home.orderDetail)
    const loading = useSelector((state) => state.home.orderDetailLoading)

    useEffect(()=>{
        dispatch(getOrderDetail(params.id))
        // eslint-disable-next-line
    },[])

    const inputNik = useRef()
    const inputName = useRef()
    const inputDOB = useRef()
    const inputEmail = useRef()
    const inputPhoneNumber = useRef()
    const inputAddress = useRef()
    const inputStatusPayment = useRef()
    const inputStatusSwab = useRef()
    const inputTypeSwab = useRef()
    const inputDateSwab = useRef()

    const onSubmitHandle = (e) => {
        e.preventDefault()
        let newOrder = {
            id: params.id,
            status_payment: inputStatusPayment.current.value?inputStatusPayment.current.value:inputStatusPayment.current.defaultValue,
            status_swab: inputStatusSwab.current.value?inputStatusSwab.current.value:inputStatusSwab.current.defaultValue
        }
        console.log(newOrder)
        dispatch(editOrder(newOrder))
        dispatch(resetOrderDetail())
        history.push('/')
    }

    if(loading) {
        return <Loading/>
    } else {

    return (
        <>
            <Navbar/>
            <section className="main_content dashboard_part">
                <Sidebar/>

                <div className="main_content_iner">
                    <div className="container-fluid p-0">
                        <div className="row justify-content-center">
                            <div className="col-lg-12" style={{marginTop:'100px'}}>
                                <div className="white_box mb_30">
                                    <div className="box_header ">
                                        <div className="main-title">
                                            <h3 className="mb-0" >Edit Pasien:</h3>
                                        </div>
                                    </div>
                                    <form onSubmit={(e)=>{onSubmitHandle(e)}}>
                                        <div className="row">
                                            {/* Left */}
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label >NIK</label>
                                                    <input type="text" className="form-control" disabled defaultValue={dataOrder.User.nik} ref={inputNik} placeholder="Enter NIK"/>
                                                </div>
                                                <div className="form-group">
                                                    <label >Name</label>
                                                    <input type="text" className="form-control" disabled defaultValue={dataOrder.User.name} ref={inputName}  placeholder="Enter Name"/>
                                                </div>
                                                <div className="form-group">
                                                    <label>Date of birth</label>
                                                    <input type="text" className="form-control" disabled defaultValue={dataOrder.User.dob} ref={inputDOB}/>
                                                </div>
                                                <div className="form-group">
                                                    <label >Email</label>
                                                    <input type="email" className="form-control" disabled defaultValue={dataOrder.User.email} ref={inputEmail} placeholder="Enter email (ex: name@domain.com)"/>
                                                </div>
                                                <div className="form-group">
                                                    <label >Address</label>
                                                    <textarea type="text" rows='4' className="form-control" disabled defaultValue={dataOrder.User.address} ref={inputAddress} placeholder="Enter address"/>
                                                </div>
                                            </div>
                                            {/* Right */}
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label >Phone Number</label>
                                                    <input type="text" className="form-control" disabled defaultValue={dataOrder.User.phone_number} ref={inputPhoneNumber} placeholder="Enter phone number"/>
                                                </div>
                                                <div className="form-group" >
                                                    <label style={{marginTop:'10px'}} >Date Swab</label>
                                                    <input type="date" className="form-control" disabled defaultValue={dataOrder.date_swab} ref={inputDateSwab}/>
                                                </div>
                                                <div className="form-group">
                                                    <label >Type Swab</label>
                                                    <input type="text" className="form-control" disabled defaultValue={dataOrder.type_swab} ref={inputTypeSwab} placeholder="Enter Type Swab"/>
                                                </div>
                                                
                                                <div className="form-group">
                                                    <label >Status Payment</label>
                                                    <select className="form-control" defaultValue={dataOrder.status_payment} ref={inputStatusPayment}>
                                                        <option>-- {dataOrder.status_payment} --</option>
                                                        <option ref={inputStatusPayment}>true</option>
                                                        <option ref={inputStatusPayment}>false</option>
                                                    </select>
                                                </div>
                                                <div className="form-group">
                                                    <label >Status Swab</label>
                                                    <select className="form-control" defaultValue={dataOrder.status_swab} ref={inputStatusSwab}>
                                                        <option>-- {dataOrder.status_swab} --</option>
                                                        <option ref={inputStatusSwab}>Menunggu</option>
                                                        <option ref={inputStatusSwab}>Positif</option>
                                                        <option ref={inputStatusSwab}>Negatif</option>
                                                    </select>
                                                </div>
                                                <div className="form-group">
                                                    <button className=" btn btn-primary" style={{marginTop:'20px', width:'110px', marginRight:'10px'}}>Submit</button>
                                                    <Link to="/" onClick={()=>{dispatch(resetOrderDetail())}} className="btn btn-danger" style={{marginTop:'20px', width:'110px'}}>Cancel</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </section>
        </>
    )
    }
}

export default DetailOrder