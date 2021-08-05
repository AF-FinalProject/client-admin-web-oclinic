import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams, Link } from "react-router-dom"
// import { getOrders, deleteOrder } from '../redux/action/actionOrder'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
// import Summary from '../components/Summary'
import Footer from '../components/Footer'
import { getCustomerOrders, deleteCustomerOrder } from "../redux/action/actionCustomer"


function CustomerOrder(){
    const params = useParams()
    const data = useSelector((state) => state.customer)
    const dispatch = useDispatch()
    const history = useHistory()
    console.log(data,"======= ini data customer order")
    useEffect(()=>{
        if(localStorage.getItem('access_token')){
            dispatch(getCustomerOrders(params.id))
        } else {
            history.push('/login')
        }
        // eslint-disable-next-line
    },[])

    const formEditOrder = (id) => {
        history.push('/FormEditOrder/'+id)
    }

    const deleteOrderHandle = (id) => {
        dispatch(deleteCustomerOrder(id, params.id))
    }

    if (data.customerOrdersLoading) 
    return (
      <>
        <div className="d-flex align-items-center justify-content-center">
          <div className="spinner-border" role="status" style={{width: '5rem', height: '5rem'}}>
            <span className="sr-only"></span>
          </div>
        </div>
      </>
    )

    return(
        <>
            <Navbar/>
            <section className="main_content dashboard_part">
                <Sidebar/>
                {/* body */}
                <div className="main_content_iner ">
                    <div className="container-fluid p-0">
                        <div className="row justify-content-center">
                            {/* <Summary/> */}
                            {/* table End */}
                            <div className="col-12" style={{marginTop:'100px'}}>
                                <div className="QA_section">
                                    <div className="white_box_tittle list_header">
                                        <h4>List Order</h4>
                        
                                    </div>
                                    <div className="QA_table mb_30">
                                        <table className="table lms_table_active" style={{borderRadius:'40px 40px 5px 5px'}}>
                                            <thead>
                                            <tr style={{backgroundColor:'red'}}>
                                                <th scope="col">No.</th>
                                                <th scope="col">Tanggal Daftar</th>
                                                <th scope="col">Tanggal Swab</th>
                                                <th scope="col">Jenis Swab</th>
                                                <th scope="col">Status Payment</th>
                                                <th scope="col">Status Swab</th>
                                                <th scope="col">Status Isoman</th>
                                                <th scope="col"><center>Action</center></th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {data.customerOrders.map((e,id) =>
                                            <tr key={e.id}>
                                                <th scope="row">{id+1}.</th>
                                                <td>{new Date(e.createdAt).toISOString().replace(/T.*/,'').split('-').reverse().join('-')}</td>
                                                <td>{new Date(e.date_swab).toISOString().replace(/T.*/,'').split('-').reverse().join('-')}</td>
                                                <td>{e.type_swab}</td>
                                                <td>{e.status_payment}</td>
                                                <td>{e.status_swab}</td>
                                                {e.Live_Tracking?
                                                <td>Isoman &nbsp;
                                                  {e.Location_Logs.length > 0?
                                                    <Link to={{ pathname: 'location/'+e.id}}><button className='btn btn-danger btn-sm' style={{marginRight:'5px', borderRadius:'20px', fontSize:'11px'}}>Warning</button></Link>
                                                    :
                                                    null}
                                                </td>
                                                :
                                                <td>-</td>
                                                }
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

export default CustomerOrder