import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import QuestionContainer from '../components/QuestionContainer';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <Route path='/' component={QuestionContainer} />
            </Switch>
        </div>
    </Router>
)

export default AppRouter;