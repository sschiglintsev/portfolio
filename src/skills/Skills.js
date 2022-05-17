import React from 'react';
import style from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";

export const Skills = () => {

    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`} >
                <h2 className={style.title}> My skills</h2>
                <div className={style.skills}>
                    <Skill title={"JS"} description={"wer wer wer rfsd sdf rte rtert e rte rte rte rte rt erte rte rt  ert"}/>
                    <Skill title={"JS"} description={"wer wer wer rfsd sdf rte rtert e rte rte rte rte r gh fghdfghfgdhf fghfgh ffghfghfgh fghfghfgh t erte rte rt  ert"}/>
                    <Skill title={"JS"} description={"wer wer wer rfsd sdf rte rtert e rte rte rte rte rt erte rte rt  ert"}/>
                    <Skill title={"JS"} description={"wer wer wer rfsd sdf rte rtert e rte rte rte rte rt erte rte rt  ert"}/>
                    <Skill title={"JS"} description={"wer wer wer rfsd sdf rte rtert e rte rte rte rte rt erte rte rt  ert"}/>
                    <Skill title={"JS"} description={"wer wer wer rfsd sdf rte rtert e rte rte rte rte rt erte rte rt  ert"}/>
                    <Skill title={"JS"} description={"wer wer wer rfsd sdf rte rtert e rte rte rte rte rt erte rte rt  ert"}/>
                    <Skill title={"JS"} description={"wer wer wer rfsd sdf rte rtert e rte rte rte rte rt erte rte rt  ert"}/>
                    <Skill title={"JS"} description={"wer wer wer rfsd sdf rte rtert e rte rte rte rte rt erte rte rt  ert"}/>
                    <Skill title={"JS"} description={"wer wer wer rfsd sdf rte rtert e rte rte rte rte rt erte rte rt  ert"}/>
                </div>

            </div>

        </div>
    );
};
