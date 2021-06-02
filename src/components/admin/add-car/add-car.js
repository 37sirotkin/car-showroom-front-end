import React, {useEffect, useState} from "react";
import "./add-car.scss";
import {AutoComplete, Button, Input} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {getMarks} from "../../redux/actions/markActions";
import {postCars} from "../../redux/actions/carActions";

const AddCar = () => {
    const [selectMark, setSelectMark] = useState();
    const [carPrice, setCarPrice] = useState();
    const [carYear, setCarYear] = useState();
    const [carModel, setCarModel] = useState();
    const [carImg, setCarImg] = useState();
    const dispatch = useDispatch();
    const marks = useSelector(state => state.marks.marks);
    useEffect(() => dispatch(getMarks()),[]);
    const options = []
    marks.forEach(mark => {
        options.push({value: mark.name})
    });
    const markOnChange = (value) => {
        const findMark = marks.find(mark => mark.name === value).mark_id;
        setSelectMark(findMark);
    }

    const carOnSend = () => {
        const obj = {
            model: carModel,
            color: "white",
            price: carPrice,
            year_of_issue: carYear,
            id_mark: selectMark,
            id_supplier: null,
            img: carImg
        }
        dispatch(postCars(obj));
        alert("Вы усешно добавили машину!")
    }


    return (
        <div className="add-car">
            <div className="add-car__column">
                <div className="add-car__column__item">
                    <div className="add-car__column__item__name">
                        Марка
                    </div>
                    <AutoComplete
                        style={{
                            width: 170,
                        }}
                        placeholder="Volvo"
                        options={options}
                        onSelect={markOnChange}
                    />
                </div>
                <div className="add-car__column__item">
                    <div className="add-car__column__item__name">
                        Страна марки
                    </div>
                    <AutoComplete
                        style={{
                            width: 170,
                        }}
                        placeholder="Швеция"
                    />
                </div>
                <div className="add-car__column__item">
                    <div className="add-car__column__item__name">
                        Тип коробки
                    </div>
                    <AutoComplete
                        style={{
                            width: 170,
                        }}
                        placeholder="Автомат"
                    />
                </div>

            </div>
            <div className="add-car__column">
                <div className="add-car__column__item">
                    <div className="add-car__column__item__name">
                        Модель
                    </div>
                    <AutoComplete
                        style={{
                            width: 170,
                        }}
                        placeholder="XC60"
                        onChange={value => setCarModel(value)}
                    />
                </div>
                <div className="add-car__column__item">
                    <div className="add-car__column__item__name">
                        Год выпуска
                    </div>
                    <AutoComplete
                        style={{
                            width: 170,
                        }}
                        placeholder="2021"
                        onChange={value => setCarYear(value)}
                    />
                </div>
                <div className="add-car__column__item">
                    <div className="add-car__column__item__name">
                        Цена
                    </div>
                    <AutoComplete
                        style={{
                            width: 170,
                        }}
                        placeholder="50000"
                        onChange={value => setCarPrice(value)}
                    />
                </div>
            </div>
            <div className="add-car__column-text">
                <div className="add-car__column-text__properties">Размеры: </div>
                <div className="add-car__column-text__properties">Эксплуат. показатели: </div>
                <div className="add-car__column-text__properties">Двигатель: </div>
            </div>
            <div className="add-car__column">
                <div className="add-car__column__item">
                    <div className="add-car__column__item__name">
                       Длина
                    </div>
                    <Input
                        style={{
                            width: 170,
                        }}
                    />
                </div>
                <div className="add-car__column__item">
                    <div className="add-car__column__item__name">
                        Макс. скорость
                    </div>
                    <Input
                        style={{
                            width: 170,
                        }}
                    />
                </div>
                <div className="add-car__column__item">
                    <div className="add-car__column__item__name">
                        Тип двигателя
                    </div>
                    <Input
                        style={{
                            width: 170,
                        }}
                    />
                </div>
            </div>
            <div className="add-car__column">
                <div className="add-car__column__item">
                    <div className="add-car__column__item__name">
                        Высота
                    </div>
                    <Input
                        style={{
                            width: 170,
                        }}
                    />
                </div>
                <div className="add-car__column__item">
                    <div className="add-car__column__item__name">
                        Разгон до 100 км/час
                    </div>
                    <Input
                        style={{
                            width: 170,
                        }}
                    />
                </div>
                <div className="add-car__column__item">
                    <div className="add-car__column__item__name">
                        Объем двигателя
                    </div>
                    <Input
                        style={{
                            width: 170,
                        }}
                    />
                </div>
            </div>
            <div className="add-car__column">
                <div className="add-car__column__item">
                    <div className="add-car__column__item__name">
                        Ширина
                    </div>
                    <Input
                        style={{
                            width: 170,
                        }}
                    />
                </div>
                <div className="add-car__column__item">
                    <div className="add-car__column__item__name">
                        Расход топлива
                    </div>
                    <Input
                        style={{
                            width: 170,
                        }}
                    />
                </div>
                <div className="add-car__column__item">
                    <div className="add-car__column__item__name">
                        Макс. мощность
                    </div>
                    <Input
                        style={{
                            width: 170,
                        }}
                    />
                </div>
                <div className="add-car__column__item">
                    <div className="add-car__column__item__name">
                        Ссылка на изображение
                    </div>
                    <AutoComplete
                        style={{
                            width: 170,
                        }}
                        onChange={value => setCarImg(value)}
                    />
                </div>
            </div>
            <div className="add-car__column">
                <div className="add-car__column__item">
                    <div className="add-car__column__item__name">
                        Колесая база
                    </div>
                    <Input
                        style={{
                            width: 170,
                        }}
                    />
                </div>
                <div className="add-car__column__item">
                    <div className="add-car__column__item__name">
                        Марка топлива
                    </div>
                    <Input
                        style={{
                            width: 170,
                        }}
                    />
                </div>
                <div className="add-car__column__item">
                    <div className="add-car__column__item__name">
                        Кол-во цилиндров
                    </div>
                    <Input
                        style={{
                            width: 170,
                        }}
                    />

                </div>
                <Button onClick={carOnSend} className="btn-main btn-save">Сохранить</Button>
            </div>

        </div>
    )
}

export default AddCar;