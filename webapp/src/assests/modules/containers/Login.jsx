import React, {useState} from "react";
import logo from "../../images/logo.svg";
import {useDispatch, useSelector} from "react-redux";
import AwesomeComponent from "../component/AwesomeComponent.jsx";
import {onLogin} from "../actions/login.action";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


export default () => {

    const [email, setEmail] = useState('')

    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const login = useSelector(state => state.Login)

    const isLoad = login.loading

    const _onLogin = () => {
        dispatch(onLogin(dispatch , { email : email , password : password}))
    }

    const _onLoginToKakao = () => {
    }

    const _onLoginToGoogle = () => {
    }

    const _onSignIn = () => {

    }

    return (

        <div className="login-wrap">

            <AwesomeComponent isShow={isLoad} color={"#61dafb"}/>

            <div className="login-box">

                <div className="login-header">
                    <img src={logo} alt="logo"/>
                    <span className="ft-color-turquoiseBlue">React CMS</span>
                </div>
                {/*header*/}

                <div className="login-body pl-3 pr-3">

                    <div className="login-input p-2">
                        <label>Email</label>
                        <input type={"text"} value={email} onChange={event => setEmail(event.target.value)}/>
                    </div>

                    <div className="login-input p-2 mt-5">
                        <label>Password</label>
                        <input type={"password"} value={password} onChange={event => setPassword(event.target.value)}/>
                    </div>

                </div>
                {/*boody*/}

                <div className="pl-5 pr-5 login-footer">
                    <button className="btn btn-turquoiseBlue btn-block" onClick={() => _onLogin()}>
                        <FontAwesomeIcon icon={['fas', 'sign-in-alt']}/>
                        <span className="ml-2">Login</span>
                    </button>
                    <button className="btn btn-warning btn-block" onClick={() => _onLoginToKakao()}>
                        <FontAwesomeIcon icon={['fas', 'comment']}/>
                        <span className="ml-2">Kakao</span>
                    </button>
                    <button className="btn btn-light btn-block" onClick={() => _onLoginToGoogle()}>
                        <FontAwesomeIcon icon={['fab', 'google']}/>
                        <span className="ml-2">Google</span>
                    </button>

                    <div className="text-box mt-1" onClick={() => _onSignIn()}>
                        <span>계정만들기</span>
                    </div>

                </div>
                {/*footer*/}

            </div>

        </div>

    )

}