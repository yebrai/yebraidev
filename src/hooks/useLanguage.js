import { useReducer, useState } from "react";

const initialState = {
  toLanguage: 'en',
  loading: false,
  welcome: `Hello 👋🏼, i´m`,
};


function reducer(state, languageAction) {
    const { language } = languageAction

  if (language === "es") {
    // Lógica del estado dentro del reducer
    // porque lo evitamos en los componentes

    const loading = state.fromText !== "";
    return {
      ...state,
      loading,
      welcome: `Hola 👋🏼, Soy`,
      toLanguage: 'es'
    };
  }

  return state;
}

export function useStore() {
  const [{ welcome, toLanguage }, dispatch] = useReducer(reducer, initialState);

  const interchangeLanguage = () => {
    dispatch({ language: 'es'});
  };

  return {
    welcome,
    toLanguage,
    interchangeLanguage,
  };
}
