import { applyMiddleware, combineReducers, createStore } from 'redux';
import {composeWithDevToolsDevelopmentOnly} from '@redux-devtools/extension';
import rickMortyReducer from "./reducers/rickMortyReducer";
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    rickMorty: rickMortyReducer,

})

export type AppStateType = ReturnType<typeof store.getState>;
export type PropertiesTypes<T> = T extends { [key: string]: infer U }
    ? U
    : never;

const composeEnhancers = composeWithDevToolsDevelopmentOnly({
    trace: true,
    traceLimit: 25,
});

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);


export default store;
