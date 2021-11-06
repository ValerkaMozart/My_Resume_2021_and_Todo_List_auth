import React, {useEffect, useState} from "react"
import classes from './NavBar.module.scss'
import {NavLink} from "react-router-dom"
import logo from '../../Images/MK_logo.jpg'
import MobileLinks from "./MobileLinks/MobileLinks"
import {connect} from "react-redux"
import {ToggleChecked} from "../../Redux/Actions/FullActions";

function NavBar(props) {
    let [state, setState] = useState({
        isChecked: false
    })
    useEffect(() => {
        props.toggleChecked(state.isChecked)
        // eslint-disable-next-line
    }, [state.isChecked])

    let dataLinks = [
        {name: 'Домашняя страница', path: '/'},
        {name: 'Авторизация/Регистрация', path: '/auth'},
        {name: 'Таск Менеджер', path: '/tasks'}
    ]
    let activeStyle = {
        color: 'red',
        border: '1px solid black',
        borderRadius: '6px',
        boxShadow: '2px 3px 5px 1px rgba(0,0,0, .4)',
        padding: '5px'
    }
    let linksHandler = evt => {
        if (evt.target.dataset.type === 'link') setState(prev => ({...prev, isChecked: false}))
    }

    return (
        <header className={classes.NavBar}>
            <div className={classes.container}>
                <div className={classes.logo}>
                    <a href="https://github.com/ValerkaMozart" rel="noreferrer" target='_blank'><img src={logo}
                                                                                                     alt="logo"/></a>
                    <h3>M.K.Production</h3>
                </div>
                <nav className={classes.navLinks}>
                    <ul>
                        {dataLinks.map((el, i) => (
                            <li key={i + 1}>
                                <NavLink
                                    exact={el.path === '/' ? true : false}
                                    activeStyle={activeStyle}
                                    to={el.path}
                                >
                                    {el.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                    <div className={classes.mob_links}>
                        <input
                            type="checkbox"
                            id='inputCheckbox'
                            checked={state.isChecked}
                            onChange={() => setState(prev => ({...prev, isChecked: !prev.isChecked}))}
                        />
                        <label htmlFor="inputCheckbox"></label>

                    </div>
                </nav>
                <MobileLinks
                    style={activeStyle}
                    links={dataLinks}
                    isChecked={state.isChecked}
                    linksHandler={linksHandler}
                />
            </div>
        </header>
    )
}

function mapDispatchToProps (dispatch) {
    return {
        toggleChecked: boolean => dispatch(ToggleChecked(boolean))
    }
}

export default connect(null, mapDispatchToProps)(NavBar)