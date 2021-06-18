import './App.scss';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import HomePage from "./components/home-page/home-page";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import MyAccount from "./components/my-account/my-account";
import ChooseAuto from "./components/choose-auto/choose-auto";
import AutoItem from "./components/auto-item/auto-item";
import TestDrive from "./components/test-drive/test-drive";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import Basket from "./components/basket/basket";
import Inspection from "./components/inspection/inspection";
import UsersAndOrders from "./components/admin/users-and-orders/users-and-orders";
import AddCar from "./components/admin/add-car/add-car";
import MainChart from "./components/charts/main-chart/main-chart";
import LoginIn from "./components/authorization/login-in/login-in";
import {signUp} from "./components/redux/actions/securityAction";
import CustomizeChart from "./components/charts/customize-chart/customize-chart";
import AllCars from "./components/all-cars/all-cars";
import SignUp from "./components/authorization/sign-up/sign-up";
import Authorization from "./components/authorization/authorization";


function App() {

    const dispatch = useDispatch();
    const security = useSelector(state => state.security);
    const {logged, signupChecked, user} = security;
    const [selectedMark, setSelectedMark] = useState();
    useEffect(() => dispatch(signUp()), []);

    return (
        <div>
            {logged &&
            <Router>
                <div className="App">
                    <Header/>
                    <div className="container">
                        <Switch>
                            <Route exact path="/" render={() => <HomePage setSelectedMark={setSelectedMark}/>}/>
                            <Route exact path="/myAccount" component={MyAccount}/>
                            <Route exact path="/allBrands" component={ChooseAuto}/>
                            <Route exact path="/autos/:autoId" component={AutoItem}/>
                            <Route exact path="/testDrive" component={TestDrive}/>
                            <Route exact path="/basket" component={Basket}/>
                            <Route exact path="/inspection" component={Inspection}/>
                            <Route exact path="/users-and-orders" component={UsersAndOrders}/>
                            <Route exact path="/add-car" component={AddCar}/>
                            <Route exact path="/main-chart" component={MainChart}/>
                            <Route exact path="/login-in" component={LoginIn}/>
                            <Route exact path="/customize-chart" component={CustomizeChart}/>
                            <Route exact path="/all-cars" component={AllCars}/>
                            <Route exact path="/sign-up" component={SignUp}/>
                        </Switch>
                    </div>
                    <Footer className="Footer"/>
                </div>
            </Router>}
            {!logged && signupChecked && <Authorization/>}
        </div>
    );
}

export default App;
