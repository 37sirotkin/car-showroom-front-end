import React, {useState} from "react";
import "./test-drive-time.scss";
import {Button, Calendar} from "antd";

const TestDriveTime = ({setSelectTime}) => {

    const [chooseDay, setChooseDay] = useState("29-04-2021");
    const [chooseTime, setChooseTime] = useState("9:00");

    const onChange = (value) => {
        setChooseDay(String(value.format("D-MM-YYYY")));

    }

    const availableTime = [
        "9:00",
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00",
    ]


    return (
        <div className="test-drive-time">
            <h2 className="test-drive-time__title">Выберите дату и время тест-драйва</h2>
            <div className="test-drive-time__selected-time">
                <span>{chooseDay}</span>,<span>{chooseTime}</span>
            </div>
            <div className="test-drive-time__block">
                <div className="site-calendar-demo-card">
                    <Calendar fullscreen={false} onChange={onChange}/>
                </div>
                <div className="test-drive-time__block__available-time">
                    {availableTime.map(item => <Button className="btn-item" onClick={() => {
                        setChooseTime(item);
                        setSelectTime(`${chooseDay} ${chooseTime}`)
                    }
                    }>{item}</Button>)}
                </div>
            </div>
        </div>
    )
}

export default TestDriveTime;