import React from "react";
import "./add-car.scss";
import {AutoComplete, Button, Input} from "antd";

const AddCar = () => {
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
                    />
                </div>
                <div className="add-car__column__item">
                    <div className="add-car__column__item__name">
                        Класс автомобиля
                    </div>
                    <AutoComplete
                        style={{
                            width: 170,
                        }}
                        placeholder="Бизнес"
                    />
                </div>
                <div className="add-car__column__item">
                    <div className="add-car__column__item__name">
                        Тип привода
                    </div>
                    <AutoComplete
                        style={{
                            width: 170,
                        }}
                        placeholder="Полный"
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
                <Button className="btn-main btn-save">Сохранить</Button>
            </div>

        </div>
    )
}

export default AddCar;