import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from "./store/UserStore";
import ContentStore from "./store/ContentStore";
import {createSelectorHook, Provider} from "react-redux";
import {store} from './store/redux/index'
export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <Provider store={store}>
        <Context.Provider
            value={{
                user: new UserStore(),
                contents: new ContentStore(),
            }}
        >
            <App/>
        </Context.Provider>
    </Provider>
);


