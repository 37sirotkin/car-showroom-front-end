import React, {useState} from "react";
import "./my-account.scss";
import {BellOutlined, FileTextOutlined, InfoCircleOutlined} from "@ant-design/icons";
import MyAccountProfile from "./profile/my-account-profile";
import MyAccountDiary from "./diary/my-account-diary";
import MyAccountNotice from "./notice/my-account-notice";
import {Tabs} from "antd";
const { TabPane } = Tabs;

const MyAccount = () => {
    const TabsIcon = {
        tabProfile:
            <div className="nav-item">
                <InfoCircleOutlined className="icon-item"/>
                <span className="nav-name">Профиль</span>
            </div>,
        tabDiary:
            <div className="nav-item">
                <FileTextOutlined className="icon-item"/>
                <span className="nav-name">Дневник</span>
            </div>,
        tabNotice:
            <div className="nav-item">
                <BellOutlined className="icon-item"/>
                <span className="nav-name">Уведомления</span>
            </div>
    }

    return (
        <div className="my-account">
            <div className="my-account__nav-icons">
                <Tabs tabPosition="left">
                    <TabPane tab={TabsIcon.tabProfile} key="1">
                        <MyAccountProfile/>
                    </TabPane>
                    <TabPane tab={TabsIcon.tabDiary} key="2">
                        <MyAccountDiary/>
                    </TabPane>
                    <TabPane tab={TabsIcon.tabNotice} key="3">
                        <MyAccountNotice/>
                    </TabPane>
                </Tabs>
            </div>
        </div>
    )
}

export default MyAccount;