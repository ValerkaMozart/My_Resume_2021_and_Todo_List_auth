import React, {useEffect, useState} from "react"
import classes from './Auth.module.scss'
import {CSSTransition} from "react-transition-group"
import {connect} from "react-redux"
import {authErrorNull, authRequest} from "../../Redux/Actions/AuthActions";
import AuthAlert from "./AuthAlert/AuthAlert";

function Auth(props) {
    let [isRender, setIsRender] = useState(false)
    useEffect(() => {
        setIsRender(true)
        // eslint-disable-next-line
    }, [])
    let errorNull = () => {
        props.authErrorNull()
    }
    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    let authSendRequest = isSignUp => {

        if (state.password && state.password && validateEmail(state.email)) {
            props.authRequest(state.email, state.password, isSignUp)
        } else if (!validateEmail(state.email) && state.password && state.password) {
            alert('Некорректно введет Email')
        } else {
            alert('Введите данные для входа!')
        }
    }
    let [state, setState] = useState({
        email: '',
        password: '',
        typeInputPassword: true
    })

    return (
        <CSSTransition in={isRender} timeout={1000} classNames='componentAnimation'>
            <div className={classes.Auth}>
                <h2>Авторизация/Регистрация</h2>
                <div className={classes.auth_area}>
                    <AuthAlert authError={props.authError} errorFunc={errorNull}/>
                    <div className={classes.email_area}>
                        <input
                            onChange={evt => setState(prev => ({...prev, email: evt.target.value}))}
                            type="text"
                            required
                            id='emailInput'
                        />
                        <label htmlFor="emailInput">Впишите Email</label>
                    </div>
                    <div className={classes.password_area}>
                        <input
                            onChange={evt => setState(prev => ({...prev, password: evt.target.value}))}
                            type={state.typeInputPassword ? 'password' : 'text'}
                            required
                            id='passwordInput'
                        />
                        <label htmlFor="passwordInput">Впишите пароль</label>

                    </div>
                    <div className={classes.checkbox}>
                        <input
                            onChange={evt => setState(prev => ({
                                ...prev,
                                typeInputPassword: !prev.typeInputPassword
                            }))}
                            id='checkboxInput'
                            type="checkbox"
                            checked={state.typeInputPassword}
                        />
                        <label htmlFor="checkboxInput">
                            { state.typeInputPassword ? 'Показать пароль' : 'Скрыть пароль' }
                        </label>
                    </div>
                    <div className={classes.btn_area}>
                        <button
                            onClick={() => authSendRequest(true)}
                        >
                            Зарегистрироваться
                        </button>
                        <button
                            onClick={() => authSendRequest(false)}
                        >
                            Войти
                        </button>
                    </div>
                </div>
            </div>
        </CSSTransition>
    )
}

function mapStateToProps (state) {
    return {
        authError: state.FullState.authError
    }
}

function mapDispatchToProps(dispatch) {
    return {
        authRequest: (email, password, isSignUp) => dispatch(authRequest(email, password, isSignUp)),
        authErrorNull: () => dispatch(authErrorNull())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)