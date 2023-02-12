import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Container, Content, Top } from "./styles";

import { IoMdAdd } from 'react-icons/io'
import { Card } from "../../components/Card";
import { Link } from "react-router-dom";


export function Home() {
  return (
    <Container>
      <Header to="/" />

      <Top>
        <div>
          <h1>Meus Filmes</h1>


          <Button to="/createmovie"
            icon={IoMdAdd}
            title="Adicionar filme"
          />

        </div>
      </Top>

      <Content>
        <Card
          data={{
            title: 'Interestellar',
            text: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...',
            tags: [
              { id: '1', name: 'Ficção Científica' },
              { id: '2', name: 'Drama' },
              { id: '3', name: 'Família' }
            ]
          }}
        />

        <Card
          data={{
            title: 'Interestellar',
            text: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...',
            tags: [
              { id: '1', name: 'Ficção Científica' },
              { id: '2', name: 'Drama' },
              { id: '3', name: 'Família' }
            ]
          }}
        />

        <Card
          data={{
            title: 'Interestellar',
            text: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...',
            tags: [
              { id: '1', name: 'Ficção Científica' },
              { id: '2', name: 'Drama' },
              { id: '3', name: 'Família' }
            ]
          }}
        />
      </Content>

    </Container>
  )
}