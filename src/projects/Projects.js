import React from 'react';
import style from './Projects.module.css'
import styleContainer from "../common/styles/Container.module.css";
import {Project} from "./project/Project";


export const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 className={style.title}>Projects</h2>
                <div className={style.projects}>
                    <Project title={"JS"} description={"wer wer wer rfsd sdf rte rtert e rte rte rte rte rt erte rte rt  ert"}/>
                    <Project title={"JS"} description={"wer wer wer rfsd sdf rte rtert e rte rte rte rte rt erte rte rt  ert"}/>
                    <Project title={"JS"} description={"wer wer wer rfsd sdf rte rtert e rte rte rte rte rt erte rte rt  ert"}/>
                    <Project title={"JS"} description={"wer wer wer rfsd sdf rte rtert e rte rte rte rte rt erte rte rt  ert"}/>
                </div>
            </div>
        </div>
    );
};
