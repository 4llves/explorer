import { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Header } from '../../components/Header';
import { Input } from "../../components/Input";
import { Markes } from "../../components/Markes";
import { Section } from "../../components/Section";
import { Textarea } from "../../components/Textarea";
import { ButtonDelete, Container, Form } from "./styles";

import { useNavigate } from "react-router-dom";

import { api } from '../../services/api';

export function CreateMovie() {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(0);
  const [observation, setObservation] = useState("");

  const [marks, setMarks] = useState([]);
  const [newMark, setNewMark] = useState("");

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1)
  }

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

  async function handleNewMovie() {
    if (!title) {
      return alert("Mermão, tem que ter titulo mano. Digita um ai pra nós.")
    }

    if (!rating) {
      return alert("Avalia esse trem ai pra nós. Sem avaliação num vai pra frente.")
    }

    if (!observation) {
      return alert("Essa observação é obrigatória. Afinal de contas... como vou saber algo sobre o filme sem uma observação ou descrição?!")
    }

    await api.post("/notes", {
      title,
      description: observation,
      rating,
      tag_name: marks
    });

    alert("Filme cadastrado com sucesso... 👌")
    navigate(-1);
  }

  return (
    <Container>
      <Header />

      <Form>
        <header>
          <ButtonText
            icon={FiArrowLeft}
            title="voltar"
            onClick={handleBack}
          />

          <h1>
            Novo Filme
          </h1>
        </header>

        <div className="top">
          <Input
            placeholder="Título"
            type="text"
            onChange={e => setTitle(e.target.value)}
          />

          <Input
            placeholder="Sua nota (de 0 a 5)"
            type="number"
            onChange={e => setRating(e.target.value)}
          />
        </div>

        <Textarea
          placeholder="Observações"
          onChange={e => setObservation(e.target.value)}
        />

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
            onClick={handleNewMovie}
          />
        </div>
      </Form>

    </Container>
  )
}