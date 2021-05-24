import React, {useState} from "react";
import "./inspection.scss";
import {Tabs} from 'antd';
import {CalendarOutlined, EditOutlined, NodeIndexOutlined, SearchOutlined, UserOutlined} from "@ant-design/icons";
import InspectionCar from "./car/inspection-car";
import InspectionPath from "./path/inspection-path";
import InspectionTime from "./time/inspection-time";
import InspectionData from "./user-data/inspection-data";

const {TabPane} = Tabs;

const Inspection = () => {

    const [selectCar, setSelectCar] = useState(0);
    const [selectPath, setSelectPath] = useState();
    const [selectTime, setSelectTime] = useState();
    return (
        <div className="test-drive">
            <h2 className="test-drive__title">
                ЗАПИСЬ НА ТЕХНИЧЕСКИЙ ОСМОТР
            </h2>
            <div className="test-drive__tabs">
                <Tabs defaultActiveKey="1">
                    <TabPane tab={<span><EditOutlined/>Авто</span>} key="1">
                        <InspectionCar selectCar={selectCar} setSelectCar={setSelectCar}/>
                    </TabPane>
                    <TabPane tab={<span><NodeIndexOutlined/>Маршрут</span>} key="2">
                        <InspectionPath selectPath={selectPath} setSelectPath={setSelectPath}/>
                    </TabPane>
                    <TabPane tab={<span><CalendarOutlined/>Дата и время</span>} key="3">
                        <InspectionTime setSelectTime={setSelectTime}/>
                    </TabPane>
                    <TabPane tab={<span><UserOutlined/>Контактные данные</span>} key="4">
                        <InspectionData selectCar={selectCar} selectPath={selectPath} selectTime={selectTime}/>
                    </TabPane>
                </Tabs>
            </div>
        </div>
    )

}

export default Inspection;