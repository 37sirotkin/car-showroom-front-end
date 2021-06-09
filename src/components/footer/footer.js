import React from "react";
import "./footer.scss";
import {
    FacebookOutlined,
    InstagramOutlined,
    MessageOutlined,
    PhoneOutlined,
    TwitterOutlined,
    YoutubeOutlined
} from "@ant-design/icons";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__information">
                <div className="footer__information__ask_question">
                    <a href="#"><MessageOutlined/><span className="span-text">Задать вопрос</span></a>
                </div>
                <div className="footer__information__phone">
                    <PhoneOutlined className="footer__information__phone__icon"/>
                    <span className="footer__information__phone__span-text">+375 25 791 78 20</span>
                </div>
                <div className="footer__information__working_hours">
                    <span>Ежедневно с 9:00 до 22:00</span>
                </div>
            </div>
            <div className="footer__social">
                <InstagramOutlined className="footer__social__icon"/>
                <FacebookOutlined className="footer__social__icon"/>
                <YoutubeOutlined className="footer__social__icon"/>
                <TwitterOutlined className="footer__social__icon"/>
            </div>
            <div className="footer__agreement">
                <div className="footer__agreement__years">
                    2013 - 2021
                </div>
                <a href="#">Пользовательское соглалшение</a>
            </div>
        </footer>
    )
}

export default Footer;