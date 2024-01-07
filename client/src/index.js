import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserStore from "./store/UserStore";
import InstructorStore from "./store/InstructorStore";

export const Context = createContext(null)

ReactDOM.render(
    <Context.Provider value={{
        user: new UserStore(),
        instructor: new InstructorStore(),
    }}>
        <App />
    </Context.Provider>,
    document.getElementById('root')
);
