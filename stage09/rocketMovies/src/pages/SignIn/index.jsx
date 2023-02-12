import { Input } from "../../components/Input";
import { Background, ButtonCreateAccount, ButtonSignIn, Container, Form } from "./styles";

import { FiMail } from "react-icons/fi"
import { RiLockPasswordLine } from "react-icons/ri"
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";


export function SignIn() {
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
        />

        <Input
          placeholder="Senha"
          type="password"
          icon={RiLockPasswordLine}
        />

        <ButtonSignIn title="Entrar" />

        <ButtonCreateAccount
          to="/signup"
          title="Criar conta"
        />
      </Form>

      <Background />

    </Container>
  )
}