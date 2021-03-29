import magnifierIcon from "../src/img/loupe.svg"
import './App.scss';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import HomePage from "./components/home-page/HomePage";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import MyAccount from "./components/my-account/MyAccount";


function App() {

    return (
        <Router>
        <div className="App">
            <Header/>
            <div className="container">
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/myAccount" component={MyAccount}/>
                </Switch>
            </div>
            <Footer/>
        </div>
        </Router>
    );
}

export default App;
