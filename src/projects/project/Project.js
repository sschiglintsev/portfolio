import React from 'react';
import style from './Project.module.scss'


export const Project = (props) => {
    return (
        <div className={style.project}>
            <div style={props.style} className={style.image}>
                <a className={style.buttonView}>view</a>
            </div>
            <div className={style.projectInfo}>
                <h3 className={style.projectTitle}>{props.title}</h3>
                <span className={style.description}>{props.description}</span>
            </div>
        </div>
    );
};
