import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, Link } from "react-router-dom"
// import { getOrders, deleteOrder } from '../redux/action/actionOrder'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Summary from '../components/Summary'
import Footer from '../components/Footer'
import { getCustomers } from "../redux/action/actionCustomer"


function Customer(){

    const data = useSelector((state) => state.customer)
    const dispatch = useDispatch()
    const history = useHistory()
    console.log(data,"======= ini data customer")
    useEffect(()=>{
        if(localStorage.getItem('access_token')){
            dispatch(getCustomers())
        } else {
            history.push('/login')
        }
        // eslint-disable-next-line
    },[])


    if (data.customerLoading) 
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
                          <Summary/>
                          {/* table End */}
                          <div className="col-12">
                              <div className="QA_section">
                                  <div className="white_box_tittle list_header">
                                      <h4>List Customer</h4>
                                  </div>
                                  <div className="QA_table mb_30">
                                      <table className="table lms_table_active" style={{borderRadius:'40px 40px 5px 5px'}}>
                                          <thead>
                                          <tr style={{backgroundColor:'red'}}>
                                              <th scope="col">No.</th>
                                              <th scope="col">NIK</th>
                                              <th scope="col">Name</th>
                                              <th scope="col">Address</th>
                                              <th scope="col">Phone Number</th>
                                              <th scope="col">Email</th>
                                              <th scope="col">Tanggal Lahir</th>
                                              <th scope="col"><center>Action</center></th>
                                          </tr>
                                          </thead>
                                          <tbody>
                                          {data.customers.map((e,id) =>
                                          <tr key={e.id}>
                                              <th scope="row">{id+1}.</th>
                                              <td>{e.nik}</td>
                                              <td>{e.name}</td>
                                              <td>{e.address}</td>
                                              <td>{e.phone_number}</td>
                                              <td>{e.email}</td>
                                              <td>{new Date(e.dob).toISOString().replace(/T.*/,'').split('-').reverse().join('-')}</td>
                                              <td>
                                                  <center>
                                                      <Link to={{ pathname: 'order/'+e.id}}><button className="btn btn-success btn-sm mb-1" style={{marginRight:'5px', width:'70px', borderRadius:'20px'}}>Orders</button></Link>
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

export default Customer