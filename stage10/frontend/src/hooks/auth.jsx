import { useState } from "react";
import { useContext, createContext } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {
    try {
      const res = await api.post("/sessions", { email, password });
      const { user, token } = res.data;

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

  return (
    // Provider é pra prover um valor
    <AuthContext.Provider value={{ signIn, user: data.user }}>
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