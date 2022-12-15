import { applyMiddleware, combineReducers, createStore } from 'redux';
import {composeWithDevToolsDevelopmentOnly} from '@redux-devtools/extension';
import rickMortyReducer from "./reducers/rickMortyReducer";
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    rickMorty: rickMortyReducer,

})

const composeEnhancers = composeWithDevToolsDevelopmentOnly({
    trace: true,
    traceLimit: 25,
});

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);


export default store
