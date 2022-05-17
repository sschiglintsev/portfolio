import React from 'react';
import style from './Contacts.module.css'
import styleContainer from "../common/styles/Container.module.css";
import {Project} from "../projects/project/Project";

export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>Contacts</h2>
                <div className={style.contacts}>
                    <form className={style.form} action="" method="post">
                        <input type="tel" name="name"/>
                        <input type="tel" name="name"/>
                        <textarea></textarea>
                        <button type="submit" type="button">ОТПРАВИТЬ</button>
                    </form>
                </div>
            </div>
        </div>
    );
};
