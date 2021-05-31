import React, {useEffect, useState} from "react";
import {Table} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {getTestDrive} from "../../redux/actions/testDriveAction";
import {getCars} from "../../redux/actions/carActions";



const MyAccountProfileTestDrive = () => {

    const security = useSelector(state => state.security);
    const {user} = security;
    const dispatch = useDispatch();
    const allTestDrives = useSelector(state => state.testDrive.testDrive);
    const allCars = useSelector(state => state.cars.cars);
    const currentUserTD = allTestDrives.filter(td => td.id_user == user.id_user);
    const tableInfo = []
    
    allCars.length > 0 && currentUserTD.forEach(td => tableInfo.push({
        key: td.length-1,
        date: td.date_of_td.slice(0,10),
        status: (td.status) ? "Подтвержден" : "Не подтвержден" ,
        car: allCars.find(car => td.id_car === car.id_car).model,
        path: td.path,
    }));

    useEffect(() => dispatch(getCars()), []);
    useEffect(async () => {
        await dispatch(getTestDrive());    

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
            <Table className="table-item" dataSource={tableInfo} columns={columns}/>
        </div>
    )
}

export default MyAccountProfileTestDrive;