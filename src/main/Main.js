import React from 'react';
import style from './Main.module.css'
import styleContainer from '../common/styles/Container.module.css'


export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <h1 className={style.h1}>Hello, I'm</h1>
                    <span className={style.textFI}>Sergey Chiglintsev</span>
                    .
                    <br></br>
                    I'm a full-stack web developer.
                </div>
                <div className={style.photo}>

                </div>
            </div>
        </div>
    );
};
