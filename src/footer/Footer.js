import React from 'react';
import  style from './Footer.module.css'
import {AiFillGithub} from "react-icons/ai";
import {FaTelegramPlane, FaLinkedinIn} from "react-icons/fa";
import {SiCodewars} from "react-icons/si";
import {RiLinkedinFill} from "react-icons/ri";


export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={style.footerContainet}>
                <div className={style.footer}>
                    <div className={style.contact}>
                        <h2 className={style.h2}>s.chiglintsev@mail.ru</h2>
                        <h2 className={style.h2}>tel.: +7 917 771 70 37</h2>
                    </div>
                    <div className={style.socIcon}>
                        <div className={style.icon}>
                            <a href="https://github.com/sschiglintsev">
                                <AiFillGithub
                                    size="30px"
                                    color="white"
                                    title="Github"
                                />
                            </a>
                        </div>
                        <div className={style.icon}>
                            <a href="https://t.me/sergey_chiglintsev">
                                <FaTelegramPlane
                                    size="30px"
                                    color="white"
                                    title="Telegram"
                                />
                            </a>
                        </div>
                        <div className={style.icon}>
                            <a href="https://www.linkedin.com/in/sergey-chiglintsev-97933b1a2">
                                <RiLinkedinFill
                                    size="30px"
                                    color="white"
                                    title="Linkedin"
                                />
                            </a>
                        </div>
                        <div className={style.icon}>
                            <a href="https://www.codewars.com/users/sschiglintsev">
                                <SiCodewars
                                    size="30px"
                                    color="white"
                                    title="Codewars"
                                />
                            </a>
                        </div>
                    </div>
                </div>
                <div className={style.h3}>
                    <h3> 2022 </h3>
                </div>
            </div>

        </div>
    );
};
