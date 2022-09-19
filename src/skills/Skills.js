import React from 'react';
import style from './Skills.module.scss'
import {Skill} from "./skill/Skill";
import mui from '../assets/images/mui.png'
import axios from '../assets/images/axios.png'
import formik from '../assets/images/formik.png'
import git from '../assets/images/git.png'
import htmlcss from '../assets/images/html-css.jpg'
import js from '../assets/images/javaScript.png'
import react from '../assets/images/react.png'
import restapi from '../assets/images/restAPI.png'
import sb from '../assets/images/storyBook.png'
import ts from '../assets/images/typeScript.png'
import ut from '../assets/images/unitTest.ico'

export const Skills = () => {
    const styleImgSkill = (img) => {
        return {backgroundImage: 'url(' + img + ')'}
    }

    return (
        <div className={style.skillsBlock} id="skills">
            <div className={` ${style.skillsContainer}`}>
                <div className={style.main_title}>
                    <div className={style.title}>
                        <h3>My skills
                            <span className={style.bg}>SKILLS</span>
                        </h3>
                    </div>
                </div>
                <div className={style.skills}>
                    <Skill title={"React"} style={styleImgSkill(react)}/>
                    <Skill title={"TypeScript"} style={styleImgSkill(ts)}/>
                    <Skill title={"JavaScript"} style={styleImgSkill(js)}/>
                    <Skill title={"MaterialUI"} style={styleImgSkill(mui)}/>
                    <Skill title={"Rest API"} style={styleImgSkill(restapi)}/>
                    <Skill title={"Axios"} style={styleImgSkill(axios)}/>
                    <Skill title={"StoryBook"} style={styleImgSkill(sb)}/>
                    <Skill title={"Unit-test"} style={styleImgSkill(ut)}/>
                    <Skill title={"Formik"} style={styleImgSkill(formik)}/>
                    <Skill title={"GIT"} style={styleImgSkill(git)}/>
                    <Skill title={"HTML&CSS"} style={styleImgSkill(htmlcss)}/>
                </div>

            </div>

        </div>
    );
};
