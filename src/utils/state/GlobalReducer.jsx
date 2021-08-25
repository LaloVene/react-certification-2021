import { theme } from "../theme/theme";

export const initialState = {
  sideBar: true,
  currentTheme: theme.light,
  userData: {},
  favorites: [],
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
    case "ADD_FAVORITE": {
      if (state.favorites.includes(action.payload)) {
        return { ...state };
      }
      const newFavorites = [...state.favorites, action.payload];
      return {
        ...state,
        favorites: newFavorites,
      };
    }
    case "REMOVE_FAVORITE": {
      const newFavorites = state.favorites.filter(
        (favorite) => favorite.id !== action.payload
      );
      return {
        ...state,
        favorites: newFavorites,
      };
    }
    case "LOAD_FROM_STORAGE": {
      const newThemeKey = JSON.parse(localStorage.getItem("theme")) || "light";
      const newFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
      return {
        ...state,
        currentTheme: theme[newThemeKey],
        favorites: newFavorites,
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
