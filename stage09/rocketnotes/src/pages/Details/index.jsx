import { Container, Links, Content } from "./styles"
import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tag"
import { ButtonText } from "../../components/ButtonText"

export function Details() {
  return (
    <>
      <Container>

        <Header />

        <main>
          <Content>
            <ButtonText title="Excluir nota" />

            <h1>
              Introdução ao React
            </h1>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dolor corrupti voluptatum, ipsum dignissimos rerum placeat
              laboriosam ratione corporis modi quod soluta ad, libero quas
              ullam cupiditate eaque facilis tempore necessitatibus.
            </p>

            <Section title="Links úteis">
              <Links>
                <li>
                  <a href="https://www.rocketseat.com.br">https://www.rocketseat.com.br</a>
                </li>
                <li>
                  <a href="https://www.rocketseat.com.br">https://www.rocketseat.com.br</a>
                </li>
              </Links>
            </Section>

            <Section title="Marcadores">
              <Tag title="Express" />
              <Tag title="Node" />
            </Section>


            <Button title="Voltar" />

          </Content>
        </main>

      </Container>
    </>
  )
}