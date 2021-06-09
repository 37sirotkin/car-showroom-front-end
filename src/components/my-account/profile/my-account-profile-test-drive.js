import React, {useEffect, useState} from "react";
import {Table} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {getTestDrive} from "../../redux/actions/testDriveAction";
import {getCars} from "../../redux/actions/carActions";
import {getMarks} from "../../redux/actions/markActions";



const MyAccountProfileTestDrive = () => {

    const security = useSelector(state => state.security);
    const {user} = security;
    const dispatch = useDispatch();
    useEffect(() => dispatch(getMarks()),[]);
    const marks = useSelector(state => state.marks.marks);
    const allTestDrives = useSelector(state => state.testDrive.testDrive);
    const allCars = useSelector(state => state.cars.cars);
    const currentUserTD = allTestDrives.filter(td => td.id_user == user.id_user);

    const setCarName = (idCar) => {
        const currentCar = allCars.find(car => car.id_car == idCar);
        const currentMark = marks.find(mark => mark.mark_id == currentCar.markMarkId);
        return `${currentMark.name} ${currentCar.model}`
    }

    const setPathName = (idPath) => {
        switch (idPath){
            case 1:
                return "Короткий маршрут"
            case 2:
                return "Длинный маршрут"
            case 3:
                return "Внедорожный маршрут"
        }
    }

    const tableInfo = [];
    
    allCars.length > 0 && currentUserTD.forEach(td => tableInfo.push({
        key: td.length-1,
        date: td.date_of_td.slice(0,10) ,
        status: (td.status) ? "Подтвержден" : "Не подтвержден" ,
        car: setCarName(td.id_car),
        path: setPathName(td.path),
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