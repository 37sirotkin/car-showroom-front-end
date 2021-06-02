import React, {useState} from "react";
import "./test-drive.scss";
import {Tabs} from 'antd';
import {CalendarOutlined, EditOutlined, NodeIndexOutlined, SearchOutlined, UserOutlined} from "@ant-design/icons";
import TestDriveCar from "./car/test-drive-car";
import TestDrivePath from "./path/test-drive-path";
import TestDriveTime from "./time/test-drive-time";
import TestDriveData from "./user-data/test-drive-data";

const {TabPane} = Tabs;

const TestDrive = () => {

    const [selectCar, setSelectCar] = useState(0);
    const [selectPath, setSelectPath] = useState();
    const [selectTime, setSelectTime] = useState();
    const [tabActiveKey, setTabActiveKey] = useState('1');

    const changeTab = () => {

    }

    console.log(selectCar);
    return (
        <div className="test-drive">
            <h2 className="test-drive__title">
                ЗАПИСЬ НА ТЕСТ-ДРАЙВ
            </h2>
            <div className="test-drive__tabs">
                <Tabs activeKey={tabActiveKey} defaultActiveKey="1">
                    <TabPane  tab={<span onClick={() => setTabActiveKey("1")}><EditOutlined/>Audi</span>} key="1">
                        <TestDriveCar setTabActiveKey={setTabActiveKey} selectCar={selectCar} setSelectCar={setSelectCar}/>
                    </TabPane>
                    <TabPane tab={<span onClick={() => setTabActiveKey("2")}><NodeIndexOutlined/>Маршрут</span>} key="2">
                        <TestDrivePath setTabActiveKey={setTabActiveKey} selectPath={selectPath} setSelectPath={setSelectPath}/>
                    </TabPane>
                    <TabPane tab={<span onClick={() => setTabActiveKey("3")}><CalendarOutlined/>Дата и время</span>} key="3">
                        <TestDriveTime setTabActiveKey={setTabActiveKey} setSelectTime={setSelectTime}/>
                    </TabPane>
                    <TabPane tab={<span onClick={() => setTabActiveKey("4")}><UserOutlined/>Контактные данные</span>} key="4">
                        <TestDriveData setTabActiveKey={setTabActiveKey} selectCar={selectCar} selectPath={selectPath} selectTime={selectTime}/>
                    </TabPane>
                </Tabs>
            </div>
        </div>
    )

}

export default TestDrive;