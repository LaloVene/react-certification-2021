import { theme } from "../theme/theme";

export const initialState = {
  sideBar: true,
  currentTheme: theme.light,
  userData: {},
};

const GlobalReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_SIDEBAR": {
      return {
        ...state,
        sideBar: !state.sideBar,
      };
    }
    case "LIGHT_THEME": {
      return { ...state, currentTheme: theme["light"] };
    }
    case "DARK_THEME": {
      return { ...state, currentTheme: theme["dark"] };
    }
    case "LOGIN": {
      return { ...state, userData: action.payload };
    }
    case "LOGOUT": {
      return { ...state, userData: {} };
    }
    case "LOAD_FROM_STORAGE": {
      const newThemeKey = JSON.parse(localStorage.getItem("theme")) || "light";
      return {
        ...state,
        currentTheme: theme[newThemeKey]
      };
    }
    case "LOAD_FROM_SESSION_STORAGE": {
      const newUserData = JSON.parse(sessionStorage.getItem("userData")) || {};
      return {
        ...state,
        userData: newUserData
      };
    }
    default:
      return state;
  }
};

export default GlobalReducer;
