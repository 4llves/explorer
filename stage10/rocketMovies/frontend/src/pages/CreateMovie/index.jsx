import { ButtonDelete, Container, Form } from "./styles";
import { Header } from '../../components/Header'
import { ButtonText } from "../../components/ButtonText";
import { Section } from "../../components/Section";
import { FiArrowLeft } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Textarea } from "../../components/Textarea";
import { Markes } from "../../components/Markes";
import { useState } from "react";

export function CreateMovie() {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(0);
  const [observation, setObservation] = useState("");

  const [marks, setMarks] = useState([]);
  const [newMark, setNewMark] = useState("");

  function handleAddMarkes() {
    //Impedir marcadores duplicados
    if (!marks.includes(newMark) && newMark.length > 0) {
      setMarks(prevState => [...prevState, newMark]);
      setNewMark("");
    } else {
      return alert("Campo vazio ou duplicado!");
    }
  }

  function handleRemoveMarks(deleted) {
    setMarks(prevState => prevState.filter(mark => mark !== deleted));
  }

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

        <Section title="Marcadores">

          <div className="tags">
            {
              marks.map((mark, index) => (
                <Markes
                  key={index}
                  value={mark}
                  onClick={() => handleRemoveMarks(mark)}
                />
              ))
            }


            <Markes
              isNew
              placeholder="Novo marcador"
              onChange={e => setNewMark(e.target.value)}
              value={newMark}
              onClick={handleAddMarkes}
            />
          </div>

        </Section>



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