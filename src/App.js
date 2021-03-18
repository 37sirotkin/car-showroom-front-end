import magnifierIcon from "../src/img/loupe.svg"
import './App.scss';
import {Menu, Dropdown, Button, Input} from "antd";
import {CheckCircleOutlined, DownOutlined, SearchOutlined} from '@ant-design/icons';




function App() {

  const menu = (
      <Menu>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
            1st menu item
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
            2nd menu item
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
            3rd menu item
          </a>
        </Menu.Item>
      </Menu>
  )

    const greenBtn = {
        background: "#07b395",
        border: "none"
    }

  return (
    <div className="App">
      <header className="header">
        <div className="header__upper-row">
          <div className="phone-number">
            +375 25 791 78 20
          </div>
          <div className="buttons-menu">
            <div className="btn-header">

            </div>
            <div className="btn-header">

            </div>
            <div className="btn-header">

            </div>
          </div>
        </div>
        <div className="header__bottom-row">
          <div className="logo-items">
            <img src="https://i.pinimg.com/originals/61/38/f8/6138f8929efacc8b9187c80aded10d57.png" alt="logo-icon"/>
            <div className="text-icon">
              ВАШ <br/> АВТОДИЛЕР
            </div>
          </div>
          <div className="dropdown-menu">
              <Dropdown className="dropdown-item" overlay={menu}>
                  <Button>
                      МЕНЮ <DownOutlined />
                  </Button>
              </Dropdown>
              <Dropdown className="dropdown-item" overlay={menu}>
                  <Button>
                      КАТАЛОГ <DownOutlined />
                  </Button>
              </Dropdown>
              <Button className="dropdown-item">АДРЕСА И КОНТАКТЫ</Button>
          </div>
        </div>
      </header>
      <div className="home-main-logo">

      </div>
      <div className="car-brands">
        <div className="car-brands__input-find-car">
          <Input className="input-search" placeholder="Введите марку автомобиля" prefix={<SearchOutlined />}/>
            <Button className="btn-main btn-search" type="primary" size="large">
                Найти
            </Button>
        </div>
        <div className="car-brands__all-brands">
            <div className="all-brands-title">
                ВСЕ МАРКИ
            </div>
            <div className="all-brands-component">

            </div>
        </div>
      </div>
      <div className="profitable-offers">
          <div className="profitable-offers__title">
              Выгодные предложения
          </div>
          <div className="profitable-offers__items">
              <div className="offer-item">

              </div>
              <div className="offer-item">

              </div>
              <div className="offer-item">

              </div>
              <div className="offer-item">

              </div>
          </div>
      </div>
      <div className="test-drive-registration">
          <div className="active-block">
              <div className="active-block__title">
                  Быстрая и удобная запись на тест-драйв
              </div>
              <div className="active-block__pluses">
                  <ul className="pluses-items">
                      <li><CheckCircleOutlined className="done-icon" />Запись за одну минуту</li>
                      <li><CheckCircleOutlined className="done-icon" />Никаких очередей</li>
                      <li><CheckCircleOutlined className="done-icon" />Скиди при записи через сайт</li>
                  </ul>
              </div>
              <Button className="btn-main" type="primary" size="large">Записаться</Button>
          </div>
          <div className="img-test-drive">

          </div>
      </div>
    </div>
  );
}

export default App;
