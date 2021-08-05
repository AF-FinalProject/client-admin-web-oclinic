import React from "react"
import { useSelector } from "react-redux"

function Summary() {

    const sumCustomer = useSelector((state)=> state.customer.customers)
    const sumOrder = useSelector((state) => state.order.order)
    const sumPositif = sumOrder.filter(e => e.status_swab === 'positif')
    const sumNegatif = sumOrder.filter(e => e.status_swab === 'negatif')

    console.log(sumOrder,'ini data total')
    console.log(sumPositif,'ini data total')

    return(
        <>
            {/* Summary */}
            <div className="col-lg-12" style={{marginTop:'100px'}}>
                <div className="single_element">
                    <div className="quick_activity">
                        <div className="row">
                            <div className="col-12">
                                <div className="quick_activity_wrap">
                                    <div className="single_quick_activity d-flex">
                                        <div className="icon">
                                            <img src="img/icon/man.svg" alt=""/>
                                        </div>
                                        <div className="count_content">
                                            <h3><span className="counter">{sumCustomer.length}</span></h3>
                                            <p>TOTAL CUSTOMER</p>
                                        </div>
                                    </div>
                                    <div className="single_quick_activity d-flex">
                                        <div className="icon">
                                            <img src="img/icon/man.svg" alt=""/>
                                        </div>
                                        <div className="count_content">
                                            <h3><span className="counter">{sumOrder.length}</span></h3>
                                            <p>TOTAL ORDER</p>
                                        </div>
                                    </div>
                                    <div className="single_quick_activity d-flex">
                                        <div className="icon">
                                            <img src="img/icon/man.svg" alt=""/>
                                        </div>
                                        <div className="count_content">
                                            <h3><span className="counter">{sumPositif.length}</span></h3>
                                            <p>POSITIF</p>
                                        </div>
                                    </div>
                                    <div className="single_quick_activity d-flex">
                                        <div className="icon">
                                            <img src="img/icon/man.svg" alt=""/>
                                        </div>
                                        <div className="count_content">
                                            <h3><span className="counter">{sumNegatif.length}</span></h3>
                                            <p>NEGATIF</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Summary */}
        </>
    )
}

export default Summary