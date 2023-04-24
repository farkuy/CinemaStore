import {combineReducers, createStore} from "redux";
import {reducerUrl} from "./urlReducer";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
};

const routeReducer = combineReducers({
    url: reducerUrl,
})

const persistedReducer = persistReducer(persistConfig, routeReducer);

export const store = createStore(persistedReducer)
