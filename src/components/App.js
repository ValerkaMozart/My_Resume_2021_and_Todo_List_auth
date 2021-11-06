import React, {useEffect} from "react"
import classes from './App.module.scss'
import NavBar from "./NavBar/NavBar"
import {Route, Switch} from "react-router-dom"
import HomePage from "./HomePage/HomePage"
import {connect} from "react-redux"
import Auth from "./Auth/Auth"
import AuthSuccess from "./Auth/AuthSuccess/AuthSuccess"
import {autoLogin} from "../Redux/Actions/AuthActions"
import TaskManager from "./TaskManager/TaskManager";
function App(props) {

    useEffect(() => {
        props.autoLogin()
        // eslint-disable-next-line
    }, [])


    return (
        <div className={classes.App}>
            <NavBar/>
            <div className={classes.container}>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route  path='/auth' component={props.token ? AuthSuccess : Auth}/>
                    { props.token ? <Route path='/tasks' component={TaskManager}/> : null }
                </Switch>
            </div>
        </div>
    );
}


function mapStateToProps(state) {
    return {
        isChecked: state.FullState.isChecked,
        token: state.FullState.tokenAuth
    }
}

function mapDispatchToProps(dispatch) {
    return {
        autoLogin: () => dispatch(autoLogin())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
