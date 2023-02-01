import { Input } from "../../components/Input";
import { Background, Container, Form } from "./styles";


import { AiOutlineArrowLeft } from "react-icons/ai"
import { RxPerson } from "react-icons/rx"
import { FiMail } from "react-icons/fi"
import { RiLockPasswordLine } from "react-icons/ri"
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";


export function SignUp() {
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
        />

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

        <Button title="Entrar" />

        <ButtonText
          icon={AiOutlineArrowLeft}
          title="Voltar para o login"
        />
      </Form>

      <Background />

    </Container>
  )
}