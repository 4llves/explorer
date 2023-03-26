import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Input } from "../../components/Input";

import { RiLockPasswordLine } from "react-icons/ri"
import { AiOutlineArrowLeft } from "react-icons/ai"
import { RxPerson } from "react-icons/rx"
import { FiMail } from "react-icons/fi"

import { Background, Container, Form, ButtonSignIn, ButtonBackLogin } from "./styles";

import { api } from "../../services/api";

export function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos!");
    }

    api.post("/users", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso!");
        navigate("/");
      })
      .catch(error => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possivel cadastrar");
        }
      });
  }

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>

        <Input
          placeholder="Nome"
          type="text"
          icon={RxPerson}
          onChange={e => setName(e.target.value)}
        />

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          onChange={e => setEmail(e.target.value)}
        />

        <Input
          placeholder="Senha"
          type="password"
          icon={RiLockPasswordLine}
          onChange={e => setPassword(e.target.value)}
        />

        <ButtonSignIn
          title="Cadastrar"
          onClick={handleSignUp}
        />

        <ButtonBackLogin
          icon={AiOutlineArrowLeft}
          title="Voltar para o login"
          to="/"
        />
      </Form>

      <Background />

    </Container>
  )
}