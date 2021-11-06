import React from "react"
import classes from './AuthAlert.module.scss'
import {CSSTransition} from "react-transition-group";
import './AnimationAlert.css'
function AuthAlert(props) {
    let boolean = !!props.authError
    if (props.authError === 'signUp') {
        return (
            <CSSTransition in={boolean} mountOnEnter unmountOnExit timeout={1000} classNames='alert'>
                <div className={classes.AuthAlert}>
                    <h2>Такой Email уже создан!</h2>
                    <button onClick={() => props.errorFunc()}>
                        <i className="fas fa-window-close"></i>
                    </button>
                </div>
            </CSSTransition>
        )
    } else {
        return (
            <CSSTransition in={boolean} mountOnEnter unmountOnExit timeout={1000} classNames='alert'>
                <div className={classes.AuthAlert}>
                    <h2>Вами введены не правильные атрибуты входа!</h2>
                    <button onClick={() => props.errorFunc()}>
                        <i className="fas fa-window-close"></i>
                    </button>
                </div>
            </CSSTransition>
        )
    }
}

export default AuthAlert