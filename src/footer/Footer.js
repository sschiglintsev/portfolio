import React from 'react';
import  style from './Footer.module.css'


export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={style.footerContainet}>
                <h2 className={style.h2}>Sergey Chiglintsev</h2>
                <div className={style.footer}>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                </div>
                <h3> 2022 </h3>

            </div>

        </div>
    );
};
