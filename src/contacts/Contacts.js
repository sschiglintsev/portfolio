import React from 'react';
import style from './Contacts.module.scss'

export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${style.contactsContainer}`}>
                <div className={style.main_title}>
                    <div className={style.title}>
                        <h3>My  contacts
                            <span className={style.bg}>Contacts</span>
                        </h3>
                    </div>
                </div>
                <div className={style.contacts}>
                    <form className={style.form} action="" method="post">
                        <input type="tel" name="name" className={style.inputForm}/>
                        <input type="tel" name="name" className={style.inputForm}/>
                        <button className={style.btn} type="submit" type="button">
                            <span>SUBMIT</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};
