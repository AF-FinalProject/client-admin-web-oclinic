import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux"
import { login } from '../redux/action/index'
// eslint-disable-next-line
import style from '../LoginMain.css'
// eslint-disable-next-line
import main from '../LoginStyle.css'
// eslint-disable-next-line

function Login(){

    const history = useHistory()
    const dispatch = useDispatch()
    
    let [ input, setInput ] = useState({
        email:'',
        password:''
    })

    const onChangeHandle = (e) => {
        const {name, value} = e.target
        setInput({...input, [name]:value})
    }

    const onSubmitHandle = (e) => {
        e.preventDefault()
        dispatch(login(input))
        history.push('/')
    }

    return(
        <>
            <div className="limiter" id="register-login">
                <div className="container-login100">
                    <div className="wrap-login100">
                        <form className="login100-form validate-form" id="formLogin" onSubmit={(e)=>{onSubmitHandle(e)}}>
                            <span className="login100-form-title p-b-43">
                                Login untuk masuk..
                            </span>
                            <div className="form-group">
                                <input type="email" className="form-control" name="email" onChange={(e)=>{onChangeHandle(e)}} placeholder="Email" style={{height:'85px', borderRadius:'15px', paddingLeft:'40px'}} />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" name="password" onChange={(e)=>{onChangeHandle(e)}} placeholder="Password" style={{height:'85px', borderRadius:'15px', paddingLeft:'40px'}} />
                            </div>
                            <div className="container-login100-form-btn mt-2">
                                <button type="submit" className="login100-form-btn">
                                    Login
                                </button>
                            </div>
                        </form>                        
                        <div className="login100-more"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login