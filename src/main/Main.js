import React from 'react';
import style from './Main.module.scss'
import PBW from '../assets/images/BlackWhite.jpg'
import PBWM from '../assets/images/BlackWhiteMiddle.jpg'


export const Main = () => {
    const photo = {
        backgroundImage: 'url(' + PBWM + ')',
    }
    return (
        <div className={style.mainBlock} style={photo}>
            <div className={style.container}>
                <div className={style.name}>
                    <h1 className={style.h1}>Sergey</h1>
                    <h1 className={style.h1}>Chiglintsev</h1>
                    <span className={style.text}>Creative Web & App Developer</span>
                </div>
            </div>
        </div>
    );
};
