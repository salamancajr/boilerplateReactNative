import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { CounterReducer } from './reducers';


const rootReducer = combineReducers({
    counter: CounterReducer,
});

let composeEnhancers = compose;

if (__DEV__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => createStore(rootReducer, composeEnhancers(applyMiddleware()));

export default configureStore;
