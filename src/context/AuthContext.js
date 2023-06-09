import { useReducer, createContext, useEffect } from "react";

export const AuthContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case "SIGNIN":
      localStorage.setItem("user", JSON.stringify(action.payload));
      return { user: action.payload };
    case "SIGNOUT":
      localStorage.removeItem("user");
      return { user: null };
    default:
      return null;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });

  useEffect(() => {
    const user = localStorage.getItem("user");
    console.log(localStorage.getItem("user"));
    dispatch({ type: "SIGNIN", payload: JSON.parse(user) });
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
