import React, {useEffect, useState} from "react";
import {Table} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {getTestDrive} from "../../redux/actions/testDriveAction";
import {getCars} from "../../redux/actions/carActions";

const MyAccountProfileTestDrive = () => {
    const [userTestDrives, updateUserTestDrives] = useState([]);
    const dispatch = useDispatch();
    const allTestDrives = useSelector(state => state.testDrive.testDrive);
    const allCars = useSelector(state => state.cars.cars);
    useEffect(() => dispatch(getCars()));
    useEffect(async () => {
        await dispatch(getTestDrive());
        const currentUserTD = allTestDrives.filter(td => td.id_user === 2);
        const tableInfo = []
        currentUserTD.forEach(td => tableInfo.push({
            key: td.length-1,
            date: td.date_of_td.slice(0,10),
            status: (td.status) ? "Подтвержден" : "Не подтвержден" ,
            car: allCars.find(car => td.id_car === car.id_car).model,
            path: td.path,
        }))
        updateUserTestDrives(tableInfo);
    }, []);



    const columns = [
        {
            title: 'Дата',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Статус',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: 'Машина',
            dataIndex: 'car',
            key: 'car',
        },
        {
            title: 'Путь',
            dataIndex: 'path',
            key: 'path',
        },
    ];

    return (
        <div className="my-account-profile-test-drive">
            <Table className="table-item" dataSource={userTestDrives} columns={columns}/>
        </div>
    )
}

export default MyAccountProfileTestDrive;