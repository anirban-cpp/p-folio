import { createContext, useReducer } from "react";

export const ThemeContext = createContext();

const INTITAL_STATE = {darkMode: false};

const ThemeReducer = (state, action) => {
    switch(action.type) {
        case "TOGGLE":
            return {darkMode: !state.darkMode};
        default:
            return state;
    }
};

export const ThemeProvider = (props) => {
    const [state, dispatch] = useReducer(ThemeReducer, INTITAL_STATE)
    return (
        <ThemeContext.Provider value={{state, dispatch}}>
            {props.children}
        </ThemeContext.Provider>
    );
};