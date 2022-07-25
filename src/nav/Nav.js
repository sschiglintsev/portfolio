import React from 'react';
import  style from './Nav.module.css'


export const Nav = () => {
    return (
        <div className={style.nav}>
            <a className={style.ref} href="">
                <span className={style.first}>Main</span>
            </a>
            <a className={style.ref} href="">
                <span className={style.first}>Skills</span>
                </a>
            <a className={style.ref} href="">
                <span className={style.first}>Project</span>
            </a>
            <a className={style.ref} href="">
                <span className={style.first}>Contact</span>
            </a>
        </div>
    );
};
