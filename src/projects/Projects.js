import React from 'react';
import style from './Projects.module.scss'
import {Project} from './project/Project';
import socialImage from '../assets/images/socnet.jpg'
import todoListImage from '../assets/images/todo.jpg'
import smImage from '../assets/images/SM.jpg'
import landingImage from '../assets/images/lending.jpg'
import cardsImage from '../assets/images/cards.jpg'


export const Projects = () => {

    const social = {
        backgroundImage: 'url(' + socialImage + ')'
    }
    const todoList = {
        backgroundImage: 'url(' + todoListImage + ')'
    }
    const sm = {
        backgroundImage: 'url(' + smImage + ')'
    }
    const landing = {
        backgroundImage: 'url(' + landingImage + ')'
    }
    const cards = {
        backgroundImage: 'url(' + cardsImage + ')'
    }

    return (
        <div className={style.projectsBlock} id="projects">
            <div className={style.projectsContainer}>
                <div className={style.main_title}>
                    <div className={style.title}>
                        <h3>My Projects
                            <span className={style.bg}>Projects</span>
                        </h3>
                    </div>
                </div>
                <div className={style.projects}>
                    <Project title={"Social Network"}
                             description={"Small social network"}
                             style={social}
                             url={"https://github.com/sschiglintsev/samurai-way-main"}/>
                    <Project title={"TODO List"}
                             description={"Task storage project"}
                             style={todoList}
                             url={"https://github.com/sschiglintsev/ToDo-LIST-React"}/>
                    <Project title={"Landiтg Page"}
                             description={"Landing Page for the production of partitions in the loft style"}
                             style={landing}
                             url={"http://chigross.ru/"}/>
                    <Project title={"Cards"}
                             description={"Question cards"}
                             style={cards}
                             url={"https://github.com/sschiglintsev/cards-front-react"}/>
                    <Project title={"SlideMaster"}
                             description={"Oil Drilling Simulator"}
                             style={sm}
                             url={"https://test.masterslide.ru/"}/>
                </div>
            </div>
        </div>
    );
};
