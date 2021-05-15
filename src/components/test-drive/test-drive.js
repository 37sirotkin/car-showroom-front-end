import React from "react";
import "./test-drive.scss";
import { Tabs } from 'antd';
import {CalendarOutlined, EditOutlined, NodeIndexOutlined, SearchOutlined, UserOutlined} from "@ant-design/icons";
import TestDriveCar from "./car/test-drive-car";
import TestDrivePath from "./path/test-drive-path";
import TestDriveTime from "./time/test-drive-time";
import TestDriveData from "./user-data/test-drive-data";
const { TabPane } = Tabs;





const TestDrive = () => {

    return (
        <div className="test-drive">
            <h2 className="test-drive__title">
                ЗАПИСЬ НА ТЕСТ-ДРАЙВ
            </h2>
            <div className="test-drive__tabs">
                <Tabs defaultActiveKey="1">
                    <TabPane tab={<span><EditOutlined />Audi</span>} key="1">
                        <TestDriveCar/>
                    </TabPane>
                    <TabPane tab={<span><NodeIndexOutlined />Маршрут</span>} key="2">
                        <TestDrivePath/>
                    </TabPane>
                    <TabPane tab={<span><CalendarOutlined />Дата и время</span>} key="3">
                        <TestDriveTime/>
                    </TabPane>
                    <TabPane tab={<span><UserOutlined />Контактные данные</span>} key="4">
                        <TestDriveData/>
                    </TabPane>
                </Tabs>
            </div>
        </div>
    )

}

export default TestDrive;