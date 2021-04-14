import React, {useState} from "react";
import "./my-account.scss";
import {BellOutlined, FileTextOutlined, InfoCircleOutlined} from "@ant-design/icons";
import MyAccountProfile from "./profile/my-account-profile";
import MyAccountDiary from "./diary/my-account-diary";
import MyAccountNotice from "./notice/my-account-notice";

const MyAccount = () => {




    const [iconNav, setIconNav] = useState("Profile");


    return (
        <div className="my-account">
            <div className="my-account__nav-icons">
                <div className="nav-item">
                    <InfoCircleOutlined className="icon-item"/>
                    <span className="nav-name">Профиль</span>
                </div>
                <div className="nav-item">
                    <FileTextOutlined className="icon-item"/>
                    <span className="nav-name">Дневник</span>
                </div>
                <div className="nav-item">
                    <BellOutlined className="icon-item"/>
                    <span className="nav-name">Уведомления</span>
                </div>
            </div>

            <MyAccountProfile/>
            {/*<MyAccountDiary/>*/}
            {/*<MyAccountNotice/>*/}
        </div>
    )
}

export default MyAccount;