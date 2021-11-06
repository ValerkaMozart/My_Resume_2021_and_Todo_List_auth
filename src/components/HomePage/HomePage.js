import React, {useEffect, useState} from "react"
import classes from './HomePage.module.scss'
import author from '../../Images/author.jpg'
import {CSSTransition} from "react-transition-group"

function HomePage() {
    let [isRender, setIsRender] = useState(false)
    useEffect(() => {
        setIsRender(true)
        // eslint-disable-next-line
    }, [])

    return (
        <CSSTransition in={isRender} timeout={1000} classNames='componentAnimation' mountOnEnter>
            <div className={classes.HomePage}>
                <h1>Приветсвую Вас! Это мое приложение-резюме.</h1>
                <div className={classes.info_area}>
                    <div className={classes.contacts}>
                        <h3>Валерий Жидков</h3>
                        <p>Junior frontend-разрабочик ReactJS</p>
                        <div className={classes.block}>
                            <img src={author} alt="author"/>
                            <p>Гражданство: Россия</p>
                            <p>День рождения: 18.02.1994</p>
                            <p>Место жительсвта: Шербинка, Москва.</p>
                            <p>Семейное положение: холост</p>
                            <p>Владение языками: английский - разговорный</p>
                            <p>Зарплатные ожидания: 60 тыс.рублей</p>
                            <div className={classes.contacts_info}>
                                <hr/>
                                <h3>Контакты:</h3>
                                <p className={classes.phone}>8-936-555-94-55</p>
                                <p className={classes.email}>valerkamozart@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className={classes.skills}>
                        <h3>Навыки и опыт:</h3>
                        <h3>Образование:</h3>
                        <div className={classes.education}>
                            <p>2016-2022</p>
                            <p>
                                Российский университет транспорта (РУТ (МИИТ)) —
                                федеральное государственное автономное
                                образовательное учреждение высшего образования
                                Российской Федерации. Юридический факультет. Кафедра уголовного права.
                                Специальность : <i>Обеспечение национальной безопасности.</i>
                            </p>
                        </div>
                        <br/>
                        <div className={classes.education}>
                            <p>2021</p>
                            <p>
                                Прошел всю платную программу на сайте <a href="https://htmlacademy.ru/">HTMLAcademy</a>
                            </p>
                        </div>
                        <br/>
                        <div className={classes.education}>
                            <p>2021</p>
                            <p>
                                Приобрёл и прошел платный курс по ReactJS у Senior-Fullstack разработчика и Youtube
                                блогера Владилена Минина.
                            </p>
                        </div>
                        <div className={classes.my_skills}>
                            <h3>Мои навыки в frontend-разработке:</h3>
                            <ul>
                                <li>Верстка: HTML5, CSS, адаптивная верстка, препроцессор SASS.
                                    Для изоляции стилей я использую модули в Реакте, но так же неплохо знаю метологию БЭМ.
                                </li>
                                <li>JavaScript : ES6, асинхронность, замыкания, методы массивов, async/await,
                                    localStorage и тд.
                                </li>
                                <li>
                                    ReactJS: Хуки, функциональное программирование, роутинг, работа со стейтом через Redux,
                                    работа с сервером через thunk и axios, анимации отедельных элементов и групп.
                                </li>
                                <li>TypeScript</li>
                                <li>JS-тестирование начального уровня. (В процессе изучения).</li>
                                <li>Для перехода в мой GitHub можете кликнуть по логотипу, или же перейти по ссылке -
                                     <a
                                         href="https://github.com/ValerkaMozart"
                                         target='_blank'
                                         rel="noreferrer"
                                     >
                                         ValerkaMozart
                                     </a>
                                </li>
                            </ul>
                        </div>
                        <div className={classes.my_hobby}>
                            <h3>Мои личностные качества и увлечения:</h3>
                            <ul>
                                <li>Готов полностью отдаться этому интересному делу и впитывать навыки и проффесионализм.
                                    Опыта работы у меня нет, но очень хочу этому научиться и двагаться вперед. Готов к стажерству.
                                </li>
                                <li>
                                    Ответственен за свои решения и
                                    поступки, имею лидерские качества,
                                    целеустремлен, исполнителен,
                                    стрессоустойчив. Умение работать в
                                    режиме многозадачности и высокие
                                    аналитические способности
                                    позволяют мне эффективно
                                    работать с большими объёмами
                                    информации, быстро находить
                                    качественные решения сложных
                                    задач.
                                </li>
                                <li>Легко нахожу общий язык с людьми, открытый и коммуникабельный человек.</li>
                                <li>Очень много читаю (около 40 книг в год).</li>
                                <li>Увлекаюсь стрельбой и игрой на гитаре, пишу музыку.</li>
                                <li>Спортсмен, не курящий и не пьющий.</li>
                                <li>Летом я мотоциклист.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </CSSTransition>
    )
}

export default HomePage