import { useContext, createContext, useState, useEffect } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {
    try {
      const res = await api.post("/sessions", { email, password });
      const { user, token } = res.data;

      localStorage.setItem("@rocketnotes:user", JSON.stringify(user));//armazenar no local storage
      localStorage.setItem("@rocketnotes:token", token);

      api.defaults.headers.authorization = `Bearer ${token}`;
      setData({ user, token });

    } catch (error) {
      if (error.response) {
        alert(error.response.message);
      } else {
        alert("Não foi possivel entrar");
      }
    }
  }

  function signOut() {
    localStorage.removeItem("@rocketnotes:user");
    localStorage.removeItem("@rocketnotes:token");

    setData({});
  }

  useEffect(() => {
    const user = localStorage.getItem("@rocketnotes:user"); //buscar no localStorage
    const token = localStorage.getItem("@rocketnotes:token");

    if (user && token) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      setData({
        token,
        user: JSON.parse(user)
      });
    }
  }, []);

  return (
    // Provider é pra prover um valor
    <AuthContext.Provider value={{
      signIn,
      signOut,
      user: data.user
    }}>
      {children} {/* esse children vai ser as rotas */}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export {
  AuthProvider,
  useAuth
};