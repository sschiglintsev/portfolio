import React from 'react';
import style from './Contacts.module.scss'

export const Contacts = () => {
    return (
        <div className={style.contactsBlock} id="contacts">
            <div className={`${style.contactsContainer}`}>
                <div className={style.main_title}>
                    <div className={style.title}>
                        <h3>My  contacts
                            <span className={style.bg}>Contacts</span>
                        </h3>
                    </div>
                </div>
                <div className={style.box}>
                    <div>
                        <a target="_blank" className={style.communication} href="https://www.linkedin.com/in/sergey-chiglintsev-97933b1a2">
                            <div className={style.box1}>
                                Linkedin
                            </div>
                        </a>
                    </div>

                    <div>
                        <a target="_blank" className={style.communication} href="https://t.me/sergey_chiglintsev">
                            <div className={style.box2}>
                                Telegram
                            </div>
                        </a>
                    </div>
                    <div>
                        <a target="_blank" className={style.communication} href="https://api.whatsapp.com/send?phone=79177717037">
                            <div className={style.box3}>
                                WhatsApp
                            </div>
                        </a>
                    </div>
                    <div>
                        <a className={style.communication} href="tel:+79177717037">
                            <div className={style.box4}>
                                +7 917 771 70 37
                            </div>
                        </a>
                    </div>
                    <div>
                        <a target="_blank" className={style.communication} href="mailto:s.chiglintsev@mail.ru">
                            <div className={style.box4}>
                                s.chiglintsev@mail.ru
                            </div>
                        </a>
                    </div>
                </div>
                {/*<div className={style.contacts}>*/}
                {/*    <form className={style.form} action="" method="post">*/}
                {/*        <input type="tel" name="name" className={style.inputForm}/>*/}
                {/*        <input type="tel" name="name" className={style.inputForm}/>*/}
                {/*        <button className={style.btn} type="submit" type="button">*/}
                {/*            <span>SUBMIT</span>*/}
                {/*        </button>*/}
                {/*    </form>*/}
                {/*</div>*/}
            </div>
        </div>
    );
};
