import React from "react"
import classes from './MobileLinks.module.scss'
import {NavLink} from "react-router-dom"
import {CSSTransition} from "react-transition-group"
import './Animation.css'

function MobileLinks(props) {
    return (
       <CSSTransition in={props.isChecked} timeout={1000} classNames='links' mountOnEnter unmountOnExit>
           <div className={classes.MobileLinks}>
               <ul onClick={evt => props.linksHandler(evt)}>
                   {props.links.map((link, i) => {
                       return (
                           <li key={i + 1}>
                               <NavLink
                                   exact={link.path === '/' ? true : false}
                                   to={link.path}
                                   activeStyle={props.style}
                                   data-type='link'
                               >
                                   {link.name}
                               </NavLink>
                           </li>
                       )
                   })}
               </ul>
           </div>
       </CSSTransition>
    )
}

export default MobileLinks