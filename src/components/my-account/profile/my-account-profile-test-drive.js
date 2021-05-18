import React, {useEffect, useState} from "react";
import {Table} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {getTestDrive} from "../../redux/actions/testDriveAction";

const MyAccountProfileTestDrive = () => {
    const [userTestDrives, updateUserTestDrives] = useState([]);
    const dispatch = useDispatch();
    const allTestDrives = useSelector(state => state.testDrive.testDrive);
    useEffect(async () => {
        await dispatch(getTestDrive());
        const currentUserTD = allTestDrives.filter(td => td.id_user === 2);
        const tableInfo = []
        currentUserTD.forEach(td => tableInfo.push({
            key: td.length-1,
            date: td.date_of_td,
            status: (!td.status) ? "Не подтвержден" : "Подтвержден" ,
            car: td.id_car,
            path: td.path,
        }))
        console.log(tableInfo)
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