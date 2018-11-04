import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import store from './store/configureStore';
import { setProgress } from './actions/progress';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)
store.dispatch(setProgress());

ReactDOM.render(jsx, document.getElementById('app'));


