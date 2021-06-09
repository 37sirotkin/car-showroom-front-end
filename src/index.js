import React from 'react';
import {render} from 'react-dom';
import 'antd/dist/antd.css';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import {rootReducer} from "./components/redux/redusers/rootReducer";

const store = createStore(rootReducer, compose(
    applyMiddleware(thunk)
))


render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>

    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
