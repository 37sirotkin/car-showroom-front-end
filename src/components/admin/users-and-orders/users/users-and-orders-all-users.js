import React, {useEffect} from "react";

import "./users-and-orders-all-users.scss";
import {Table} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "../../../redux/actions/userAction";

const UsersAndOrdersAllUsers = () => {

    const dispatch = useDispatch();
    const users = useSelector(state => state.users.users);
    useEffect(() => dispatch(getUsers()), [])
    const dataSourceForUsers = [];

    const setUserStatus = (status) => {
        return (status !== true) ? "active" : "blocked"
    }

    const columnsForUsers = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Имя',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Фамилия',
            dataIndex: 'surname',
            key: 'surname',
        },
        {
            title: 'Дата рождения',
            dataIndex: 'bd',
            key: 'bd',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Телефон',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Статус',
            dataIndex: 'status',
            key: 'status',
        },
    ];

    users.length && users.forEach(user => {
        dataSourceForUsers.push({
            key: user.id_user,
            id: user.id_user,
            name: user.first_name,
            surname: user.surname,
            bd: user.birthday,
            email: user.email,
            phone: user.phone,
            status: setUserStatus(user.status)
        })
    })

    return (
        <div className="users-and-orders-all-users">
            <Table className="table-item" dataSource={dataSourceForUsers} columns={columnsForUsers}/>
        </div>
    )
}

export default UsersAndOrdersAllUsers;