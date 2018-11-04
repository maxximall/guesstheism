import questions from '../data/questions';
import {createStore, combineReducers, applyMiddleware, compose } from 'redux';
import progressReducer from '../reducers/progress';
import questionsReducer from '../reducers/questions';
import answersReducer from '../reducers/answers';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    progress: progressReducer,
    questions: questionsReducer,
    answers: answersReducer
})

const defaultState = {
    questions,
};


const store = createStore(rootReducer, defaultState, composeEnhancers(applyMiddleware(thunk)));

export default store;
