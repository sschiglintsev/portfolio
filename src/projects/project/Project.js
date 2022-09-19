import React from 'react';
import style from './Project.module.scss'
import 'remixicon/fonts/remixicon.css'


export const Project = (props) => {
    return (
        <div className={style.project}>
            <div style={props.style} className={style.image}>
                <a href={props.url} className={style.buttonView} target="_blank">VIEW</a>
            </div>
            <div className={style.projectInfo}>
                <h3 className={style.projectTitle}>{props.title}</h3>
                <span className={style.description}>{props.description}</span>
            </div>
        </div>
    );
};
