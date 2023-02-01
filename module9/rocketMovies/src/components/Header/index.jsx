import { FiSearch } from "react-icons/fi";
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
          <ButtonSair
            title="Sair"
          />
        </div>

        <img src="http://github.com/4llves.png" alt="Foto do usuário" />
      </Profile>
    </Container>
  )
}