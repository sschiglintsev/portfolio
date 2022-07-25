import React from 'react';
import style from './Skill.module.scss'


export const Skill = (props) => {
    return (
        <div className={style.skill}>
            <div style={props.style} className={style.icon}>

            </div>
            <div className={style.skillInfo}>
                <h3 className={style.projectTitle}>{props.title}</h3>
            </div>

        </div>
    );
};
