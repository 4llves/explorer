import { useState } from "react";
import { Container, Form, Avatar } from "./styles";
import { ButtonText } from '../../components/ButtonText'
import { AiOutlineArrowLeft } from "react-icons/ai";
import { FiCamera, FiLock, FiMail, FiUser } from "react-icons/fi";
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { useAuth } from "../../hooks/auth";
import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom'

import avatarPlaceholder from '../../assets/avatar_placeholder.svg';


export function Profile() {
  const { user, updateProfile } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwordOld, setPasswordOld] = useState('');
  const [passwordNew, setPasswordNew] = useState('');

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder //condiconal para aparecer a imagem ou um placeholder
  const [avatar, setAvatar] = useState('');
  const [avatarFile, setAvatarFile] = useState(null);

  const navigate = useNavigate();

  function handleChangeAvatar(event) {
    const file = event.target.files[0];
    setAvatar(file);

    const imgPreview = URL.createObjectURL(file);
    setAvatar(imgPreview);
  }

  async function handleUpdate() {
    const updated = {
      name,
      email,
      password: passwordNew,
      old_passwowrd: passwordOld,
    }

    const userUpdated = Object.assign(user, updated);

    await updateProfile({ user: userUpdated, avatarFile });
  }

  return (
    <Container>
      <header>
        <ButtonText to="/"
          icon={AiOutlineArrowLeft}
          title="Voltar"
        />
      </header>

      <Form>
        <Avatar>
          <img
            src={avatarUrl}
            alt="Foto do usuário"
          />

          <label htmlFor="avatar">
            <FiCamera />

            <input
              id="avatar"
              type="file"
              onChange={handleChangeAvatar}
            />
          </label>

        </Avatar>


        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
        />

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
        />

        <Input
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
        />

        <Input
          placeholder="Nova senha"
          type="password"
          icon={FiLock}
        />

        <Button
          title="Salvar"
          disabled
          onClick={handleUpdate}
        />
      </Form>

    </Container>
  )
}