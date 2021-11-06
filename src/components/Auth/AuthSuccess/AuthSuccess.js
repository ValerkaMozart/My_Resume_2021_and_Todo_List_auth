import React, {useEffect, useState} from "react"
import classes from './AuthSuccess.module.scss'
import {CSSTransition} from "react-transition-group"
import {connect} from "react-redux"
import {authExit} from "../../../Redux/Actions/AuthActions";


function AuthSuccess(props) {
    let email = localStorage.getItem('email')
    let [isRender, setISRender] = useState(false)
    useEffect(() => {
        setISRender(true)
    }, [])

    let exitHandler = () => {
        props.exitAuth()
    }
    return (
        <CSSTransition in={isRender} timeout={1000} classNames='componentAnimation'>
            <div className={classes.AuthSuccess}>
                <h1>Успешный вход в систему.</h1>
                <h2>Вы вошли под логином : {email}</h2>
                <h2>Теперь вы можете перейти в раздел Таск менеджера, где под ваш Email создана ячейка.</h2>
                <button onClick={() => exitHandler()}>Выйти из системы</button>
            </div>
        </CSSTransition>
    )
}

function mapDispatchToProps (dispatch) {
    return {
        exitAuth: () => dispatch(authExit())
    }
}

export default connect(null, mapDispatchToProps)(AuthSuccess)