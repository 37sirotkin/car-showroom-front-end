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
    console.log(selectCar);
    return (
        <div className="test-drive">
            <h2 className="test-drive__title">
                ЗАПИСЬ НА ТЕСТ-ДРАЙВ
            </h2>
            <div className="test-drive__tabs">
                <Tabs defaultActiveKey="1">
                    <TabPane tab={<span><EditOutlined/>Audi</span>} key="1">
                        <TestDriveCar selectCar={selectCar} setSelectCar={setSelectCar}/>
                    </TabPane>
                    <TabPane tab={<span><NodeIndexOutlined/>Маршрут</span>} key="2">
                        <TestDrivePath selectPath={selectPath} setSelectPath={setSelectPath}/>
                    </TabPane>
                    <TabPane tab={<span><CalendarOutlined/>Дата и время</span>} key="3">
                        <TestDriveTime setSelectTime={setSelectTime}/>
                    </TabPane>
                    <TabPane tab={<span><UserOutlined/>Контактные данные</span>} key="4">
                        <TestDriveData selectCar={selectCar} selectPath={selectPath} selectTime={selectTime}/>
                    </TabPane>
                </Tabs>
            </div>
        </div>
    )

}

export default TestDrive;