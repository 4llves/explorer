import { Container } from "./styles";
import { Header } from '../../components/Header'
import { ButtonText } from "../../components/ButtonText";
import { FiArrowLeft } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function CreateMovie() {
  return (
    <Container>
      <Header />

      <ButtonText
        icon={FiArrowLeft}
        title="voltar"
      />

      <h1>
        Novo Filme
      </h1>

      <Input
        placeholder="Título"
        type="text"
      />

      <Input
        placeholder="Sua notta (de 0 a 5)"
        type="number"
      />

      <Input
        placeholder="Observações"
        type="textarea"
      />

      <p>Marcadores</p>

      <div>
        <p>Trabalhar a Tag aqui depois</p>
      </div>

      <Button
        title="Excluir filme"
        disabled
      />

      <Button
        title="Salvar alterações"
      />

    </Container>
  )
}