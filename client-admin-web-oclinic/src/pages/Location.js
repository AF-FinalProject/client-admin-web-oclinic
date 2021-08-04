import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, Link, useParams } from "react-router-dom"
import { getOrders, deleteOrder } from '../redux/action/actionOrder'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Summary from '../components/Summary'
import Footer from '../components/Footer'
import { getLocations } from "../redux/action/actionLocation"


function Location(){

    const data = useSelector((state) => state.location)
    let [position, setPosition] = useState({
      latitude: 0,
      longitude: 0
    })
    const params = useParams()
    const dispatch = useDispatch()
    const history = useHistory()
    console.log(data,"======= ini data location")
    useEffect(()=>{
        if(localStorage.getItem('access_token')){
            dispatch(getLocations(params.id))
        } else {
            history.push('/login')
        }
        // eslint-disable-next-line
    },[])

  const viewMap = (latitude, longitude) => {
    setPosition({...position, latitude, longitude})
  }


    if (data.locationLoading) 
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
                                      <h4>List Location</h4>
                                      <div className="box_right d-flex lms_block">
                                          <div className="serach_field_2">
                                          <div className="search_inner">
                                              <form>
                                                  <div className="search_field">
                                                      <input type="text" placeholder="Search Customer here..."/>
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
                                              <th scope="col">Date</th>
                                              <th scope="col">Time</th>
                                              <th scope="col"><center>Action</center></th>
                                          </tr>
                                          </thead>
                                          <tbody>
                                          {data.locations.map((e,id) =>
                                          <tr key={e.id}>
                                              <th scope="row">{id+1}.</th>
                                              <td>{new Date(e.createdAt).toISOString().replace(/T.*/,'').split('-').reverse().join('-')}</td>
                                              <td>{new Date(e.createdAt).getHours()}:{new Date(e.createdAt).getMinutes()}:{new Date(e.createdAt).getSeconds()}</td>
                                              <td>
                                                  <center>
                                                      <button onClick={()=>{viewMap(e.latitude, e.longitude)}} className="btn btn-success btn-sm mb-1" style={{marginRight:'5px', width:'70px', borderRadius:'20px'}}>View Maps</button>
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
              <div className="row justify-content-center">

              {position.latitude && position.longitude ?
                <div dangerouslySetInnerHTML={{ __html: `<iframe src='https://www.google.com/maps?q=${position.latitude},${position.longitude}&hl=es;z=14&output=embed' width='600' height='450' style='border:0' allowfullscreen loading='lazy'/>`}} />
                :
                null}
              </div>
              {/* body end*/}
              <Footer/>

          </section>
      </>
  )
}

export default Location