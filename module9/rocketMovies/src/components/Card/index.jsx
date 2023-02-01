import { Container, TagCard } from "./styled";
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

const stars = [true, true, true, true, false]

export function Card({ data }) {
  return (
    <Container>
      <div>
        <h1>{data.title}</h1>

        {stars.map((star) => (
          star ? <AiFillStar /> : <AiOutlineStar />
        ))}
      </div>

      <p>{data.text}</p>

      {
        data.tags &&
        <footer>
          {data.tags.map(tag =>
            <TagCard
              key={tag.name}
              title={tag.name}
            />
          )}
        </footer>
      }
    </Container>
  )
}