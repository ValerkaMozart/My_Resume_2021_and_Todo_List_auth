import React, {useEffect, useState} from "react"
import classes from './TaskManager.module.scss'
import {connect} from "react-redux"
import {CSSTransition} from "react-transition-group"
import {addTask, autoLoadTasks, taskDelete} from "../../Redux/Actions/TaskActions"
import {TransitionGroup} from "react-transition-group"
import './taskAnimation.css'

function TaskManager(props) {
    let email = localStorage.getItem('email')
    let [isRender, setIsRender] = useState(false)
    useEffect(() => {
        setIsRender(true)
        props.autoLoadTasks()
        // eslint-disable-next-line
    }, [])
    let [state, setState] = useState({
        task: '',
        isImportant: false
    })

    let importantStyleTask = {
        background: 'rgba(255,0,17,0.59)'
    }
    let taskDeleteHandler = id => {
        props.delTask(id)
    }
    let addTaskHandler = evt => {
        evt.preventDefault()
        if (state.task) {
            let dataTask = {
                id: new Date(),
                isImportant: state.isImportant,
                task: state.task
            }
            props.addTask(dataTask)
            setState(prev => ({...prev, task: ''}))
        }
    }
    return (
        <CSSTransition in={isRender} timeout={1000} classNames='componentAnimation'>
            <div className={classes.TaskManager}>
                <h2>Менеджер задач для : {email}</h2>
                <form className={classes.inputArea} onSubmit={evt => addTaskHandler(evt)}>
                    <input
                        type="text"
                        required
                        onChange={evt => setState(prev => ({...prev, task: evt.target.value}))}
                        value={state.task}
                        id='inputTask'
                        placeholder='Впишите свою задачу...'
                    />
                    <label htmlFor="inputTask"></label>
                    <button type='submit'>Добавить в задачи</button>
                    <input
                        onChange={evt => setState(prev => ({...prev, isImportant: evt.target.checked}))}
                        type="checkbox"
                        id='important'
                        checked={state.isImportant}
                    />
                    <label htmlFor="important">Важная задача!</label>
                </form>
                <div className={classes.allTasks}>
                    <h3>{props.tasksData.length ? 'Ваши задачи: ' : 'Список задач пока-что пуст...'}</h3>
                    <TransitionGroup component='ul'>
                        { props.tasksData.map((task, index) => {
                            return (
                                <CSSTransition key={task.id} timeout={1000} classNames='taskAnimation'>
                                <li style={task.isImportant ? importantStyleTask : null}>
                                    {task.task}
                                    <button
                                        onClick={() => taskDeleteHandler(task.id)}
                                    >
                                        <i className="far fa-window-close"></i>
                                    </button>
                                </li>
                                </CSSTransition>
                            )
                        } )}
                    </TransitionGroup>
                </div>
            </div>
        </CSSTransition>
    )
}

function mapStateToProps(state) {
    return {
        isLoaded: state.FullState.isLoaded,
        tasksData: state.FullState.tasks
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addTask: task => dispatch(addTask(task)),
        autoLoadTasks: () => dispatch(autoLoadTasks()),
        delTask: id => dispatch(taskDelete(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskManager)