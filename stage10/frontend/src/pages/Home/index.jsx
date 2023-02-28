import { useState, useEffect } from 'react';
import { FiPlus, FiSearch } from 'react-icons/fi'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Section } from '../../components/Section'
import { ButtonText } from '../../components/ButtonText'
import { Note } from '../../components/Note'

import { api } from '../../services/api';

import { Container, Brand, Menu, Search, Content, NewNote } from './styles'

export function Home() {
  const [tags, setTags] = useState([])

  useEffect(() => {
    async function fetchTags() {
      const res = await api.get("/tags");
      setTags(res.data);
    }

    fetchTags();
  }, [])

  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header>

      </Header>

      <Menu>
        <li>
          <ButtonText
            title="Todos"
            isActive
          />
        </li>
        {
          tags && tags.map(tag => (
            <li key={String(tag.id)}>
              <ButtonText
                title={tag.name}
              />
            </li>
          ))
        }
      </Menu>

      <Search>
        <Input placeholder="Pesquisar pelo título" icon={FiSearch} />
      </Search>

      <Content>
        <Section title="Minhas notas">
          <Note data={{
            title: 'React',
            tags: [
              { id: '1', name: 'react' },
              { id: '2', name: 'rocket' }
            ]
          }} />
        </Section>
      </Content>

      <NewNote to="/New">
        <FiPlus />
        Criar Nota
      </NewNote>

    </Container>
  )
}