import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Container, Content, Top } from "./styles";

import { IoMdAdd } from 'react-icons/io'
import { Card } from "../../components/Card";

import { api } from "../../services/api";

export function Home() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  const navigate = useNavigate();

  function handleOnChange(e) {
    if (window.location.pathname === "/") {
      setSearch(e.target.value);
    }
  }

  //Carregar os movies 
  useEffect(() => {
    async function fetchMovies() {
      const res = await api.get(`/notes?title=${search}`)
      console.log(res.data)
      setMovies(res.data);
    }

    fetchMovies()
  }, [search]);

  function hadleDetail(id) {
    navigate(`/moviepreview/${id}`)
  }


  return (
    <Container>
      <Header to="/"
        onChange={handleOnChange}
      />

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
        {
          movies.map((movie, i) => (
            <Card
              key={String(i)}
              data={movie}
              onClick={() => { hadleDetail(movie.id) }}
            />
          ))
        }

        {/* <Card
          data={{
            title: 'Interestellar',
            text: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...',
            tags: [
              { id: '1', name: 'Ficção Científica' },
              { id: '2', name: 'Drama' },
              { id: '3', name: 'Família' }
            ]
          }}
        />*/}
      </Content>

    </Container>
  )
}