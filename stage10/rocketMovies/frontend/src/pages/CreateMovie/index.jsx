import { ButtonDelete, Container, Form } from "./styles";
import { Header } from '../../components/Header'
import { ButtonText } from "../../components/ButtonText";
import { FiArrowLeft } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Textarea } from "../../components/Textarea";
import { Markes } from "../../components/Markes";

export function CreateMovie() {
  return (
    <Container>
      <Header />

      <Form>
        <header>
          <ButtonText to="/"
            icon={FiArrowLeft}
            title="voltar"
          />

          <h1>
            Novo Filme
          </h1>
        </header>

        <div className="top">
          <Input
            placeholder="Título"
            type="text"
          />

          <Input
            placeholder="Sua nota (de 0 a 5)"
            type="number"
          />
        </div>

        <Textarea placeholder="Observações" />

        <p>Marcadores</p>

        <div className="tags">
          <Markes value="React" />
          <Markes isNew placeholder="Novo marcador" />
        </div>

        <div className="buttons">
          <ButtonDelete
            title="Excluir filme"
          />

          <Button
            title="Salvar alterações"
          />
        </div>
      </Form>

    </Container>
  )
}