import React, {useEffect} from "react";
import {Table} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "../../../redux/actions/userAction";
import {getOrder} from "../../../redux/actions/orderAction";
import {getCars} from "../../../redux/actions/carActions";
import {getMarks} from "../../../redux/actions/markActions";

const UserAndOrdersOrders = () => {

    const dispatch = useDispatch();
    const orders = useSelector(state => state.order.order);
    const users = useSelector(state => state.users.users);
    const cars = useSelector(state => state.cars.cars);
    const marks = useSelector(state => state.marks.marks);
    useEffect(() => {
        dispatch(getOrder());
        dispatch(getUsers());
        dispatch(getCars());
        dispatch(getMarks());
    },[])
    const setUserName = idUser => {
        const currentUser = users.find(user => user.id_user == idUser);
        return `${currentUser.first_name} ${currentUser.surname}`
    }
    const setCarName = idCar => {
        const currentCar = cars.find(car => car.id_car == idCar);
        const currentMark = marks.find(mark => mark.mark_id == currentCar.markMarkId);
        return `${currentMark.name} ${currentCar.model}`
    }
    const setStatus = status => {
        return status !== 0 ? "Не подтвержден" : "Подтвержден"
    }
    const dataSourceForOrders = [];
    orders.length && orders.forEach(order => {
        dataSourceForOrders.push({
            key: order.id_order,
            id: order.id_order,
            id_user: order.id_user,
            name: users.length && setUserName(order.id_user),
            id_car: order.id_car,
            car_name: cars.length && marks.length && setCarName(order.id_car),
            price: order.price,
            status: setStatus(order.status)
        })
    })



    const columnsForOrders = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'User ID',
            dataIndex: 'id_user',
            key: 'id_user',
        },
        {
            title: 'Имя заказчика',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Car ID',
            dataIndex: 'id_car',
            key: 'id_car',
        },
        {
            title: 'Автомобиль',
            dataIndex: 'car_name',
            key: 'car_name',
        },
        {
            title: 'Цена',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Статус',
            dataIndex: 'status',
            key: 'status',
        },
    ];

    return (
        <Table className="table-item" dataSource={dataSourceForOrders} columns={columnsForOrders}/>
    )
}

export default UserAndOrdersOrders;