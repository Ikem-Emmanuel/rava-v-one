'use client'

import { IAction, IThemeState } from "@/utils/interface";
import { ReactNode, createContext, useReducer } from "react";

const INITIAL_THEME_STATE = {
    theme:'dark'
}

interface IContextProps {
  mode: IThemeState;
  dispatch: React.Dispatch<IAction>;
}


export const ThemeContext = createContext<IContextProps>(
    {
        mode: INITIAL_THEME_STATE,
        dispatch:()=>{}
    }
)

const reducer = (state: IThemeState, action: IAction) => {
    switch (action.type) {
        case 'CHANGE_THEME':
            return {
                ...state,
                    theme: state.theme === 'dark' ? 'light' : 'dark'
            }
        default:
            return state;
    }
}

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, dispatch] = useReducer(reducer, INITIAL_THEME_STATE);

  return (
    <ThemeContext.Provider value={{ mode, dispatch }}>
      <div className={`theme ${mode.theme}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};