import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  useReducer,
} from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const initialState = { isAuth: false, user: {} };
const reducer = (state, action) => {
  // console.log("action", action);
  switch (action.type) {
    case "SET_LOGGED_IN":
      return { ...state, isAuth: true, user: action.payload.user };
    case "SET_LOGGED_OUT":
      localStorage.setItem("isLoggedIn", false);
      localStorage.removeItem("user");
      return initialState;
    default:
      return state;
  }
};

export default function AuthContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isAppLoading, setIsAppLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn) {
      const user = JSON.parse(localStorage.getItem("user"));
      dispatch({ type: "SET_LOGGED_IN", payload: { user } });
    } else {
      navigate("/auth/login");
    }
    setTimeout(() => {
      setIsAppLoading(false);
    }, 1000);
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, dispatch, isAppLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => useContext(AuthContext);
