import { useState } from 'react';
import { Input } from "../../components/Input";
import { Background, ButtonCreateAccount, ButtonSignIn, Container, Form } from "./styles";

import { useAuth } from '../../hooks/auth';

import { FiMail } from "react-icons/fi";
import { RiLockPasswordLine } from "react-icons/ri";


export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useAuth();

  function handleSignIn() {
    //console.log(email, password);
    signIn({ email, password });
  }

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>

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
          title="Entrar"
          onClick={handleSignIn}
        />

        <ButtonCreateAccount
          to="/register"
          title="Criar conta"
        />
      </Form>

      <Background />

    </Container>
  )
}