import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Input } from "../Input";
import { Container, Profile, ButtonSair } from "./styles";
import { useAuth } from '../../hooks/auth'
import { useNavigate } from 'react-router-dom'

import { api } from '../../services/api';

export function Header() {
  const { signOut, user } = useAuth();
  const navigate = useNavigate();

  function handleSignOut() {
    navigate("/");
    signOut();
  }

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
          <strong>{user.name}</strong>
          <ButtonSair
            onClick={handleSignOut}
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