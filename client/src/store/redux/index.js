import {combineReducers, createStore} from "redux";
import {reducerUrl} from "./urlReducer";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {authReducer} from "./authReducer";

const persistConfig = {
    key: 'root',
    storage,
};

const routeReducer = combineReducers({
    url: reducerUrl,
    auth: authReducer,
})

const persistedReducer = persistReducer(persistConfig, routeReducer);

export const store = createStore(persistedReducer);



