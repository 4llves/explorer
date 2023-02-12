import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Input } from "../Input";
import { Container, Profile, ButtonSair } from "./styles";

export function Header() {
  return (
    <Container>
      <h1>RocketMovies</h1>

      <Input
        icon={FiSearch}
        type="search"
        placeholder="Pesquisar pelo título"
      />

      <Profile>
        <div>
          <strong>Alves Jhonata</strong>
          <ButtonSair to="/signin"
            title="Sair"
          />
        </div>

        <Link to="/profile">
          <img src="http://github.com/4llves.png" alt="Foto do usuário" />
        </Link>
      </Profile>
    </Container>
  )
}