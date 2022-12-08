import { combineReducers, createStore } from 'redux';
import {composeWithDevToolsDevelopmentOnly} from '@redux-devtools/extension';
import rickMortyReducer from "./reducers/rickMortyReducer";

const rootReducer = combineReducers({
    rickMorty: rickMortyReducer,
    // users: usersReducer,
    // messages: messagesReducer,
})

const composeEnhancers = composeWithDevToolsDevelopmentOnly({
    trace: true,
    traceLimit: 25,
});

const store = createStore(
    rootReducer,
    composeEnhancers()
);


export default store
