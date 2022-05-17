import React from 'react';
import  style from './Nav.module.css'


export const Nav = () => {
    return (
        <div className={style.nav}>
            <a className={style.ref} href="">Main</a>
            <a className={style.ref} href="">Skills</a>
            <a className={style.ref} href="">Project</a>
            <a className={style.ref} href="">Contact</a>
        </div>
    );
};
