import magnifierIcon from "../src/img/loupe.svg"
import './App.scss';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import HomePage from "./components/home-page/HomePage";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import MyAccount from "./components/my-account/my-account";
import ChooseAuto from "./components/choose-auto/choose-auto";
import AutoItem from "./components/auto-item/auto-item";
import TestDrive from "./components/test-drive/test-drive";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getCars} from "./components/redux/actions/carActions";


function App() {

    const dispatch = useDispatch();
    useEffect(() => dispatch(getCars()), []);
    const cars = useSelector(state => state.cars.cars);

    const [selectedMark, setSelectedMark] = useState();

    return (
        <Router>
            <div className="App">
                <Header/>
                <div className="container">
                    <Switch>
                        <Route exact path="/" render={() => <HomePage setSelectedMark={setSelectedMark}/>}/>
                        <Route exact path="/myAccount" component={MyAccount}/>
                        <Route exact path="/allBrands" render={() => <ChooseAuto selectedMark={selectedMark} />}/>
                        <Route exact path="/autoItem" component={AutoItem}/>
                        <Route exact path="/testDrive" component={TestDrive}/>
                    </Switch>
                </div>
                <Footer className="Footer"/>
            </div>
        </Router>
    );
}

export default App;
