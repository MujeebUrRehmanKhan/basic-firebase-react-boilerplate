import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from "redux";
import logger from 'redux-logger'
import reducer from './reducers'
import rootSaga from './sagas'

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem("state");
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem("state", serializedState);
    } catch (err) {
        // Ignore white errors
    }
};
const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        })
        : compose;

const persistedState = loadState();
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, persistedState, composeEnhancers(applyMiddleware(sagaMiddleware, logger)));
sagaMiddleware.run(rootSaga);

store.subscribe(() => {
    saveState(store.getState());
})

export default store