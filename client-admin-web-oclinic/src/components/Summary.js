import React from "react"

function Summary() {
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
                                            <h3><span className="counter">520</span></h3>
                                            <p>TOTAL</p>
                                        </div>
                                    </div>
                                    <div className="single_quick_activity d-flex">
                                        <div className="icon">
                                            <img src="img/icon/man.svg" alt=""/>
                                        </div>
                                        <div className="count_content">
                                            <h3><span className="counter">520</span></h3>
                                            <p>POSITIF</p>
                                        </div>
                                    </div>
                                    <div className="single_quick_activity d-flex">
                                        <div className="icon">
                                            <img src="img/icon/man.svg" alt=""/>
                                        </div>
                                        <div className="count_content">
                                            <h3><span className="counter">520</span></h3>
                                            <p>NEGATIF</p>
                                        </div>
                                    </div>
                                    <div className="single_quick_activity d-flex">
                                        <div className="icon">
                                            <img src="img/icon/man.svg" alt=""/>
                                        </div>
                                        <div className="count_content">
                                            <h3><span className="counter">520</span></h3>
                                            <p>SEMBUH</p>
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