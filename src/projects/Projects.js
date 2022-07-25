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
        <div className={style.projectsBlock}>
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
                             style={social}/>
                    <Project title={"TODO List"}
                             description={"Task storage project"}
                             style={todoList}/>
                    <Project title={"Landiтg Page"}
                             description={"Landing Page for the production of partitions in the loft style"}
                             style={landing}/>
                    <Project title={"Cards"}
                             description={"Question cards"}
                             style={cards}/>
                    <Project title={"SlideMaster"}
                             description={"Oil Drilling Simulator"}
                             style={sm}/>
                </div>
            </div>
        </div>
    );
};
