import { Container, TagCard } from "./styled";
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { Link } from "react-router-dom";

const stars = [true, true, true, true, false]

export function Card({ data }) {
  return (
    <Container>
      <div className="title">
        <Link to="/moviepreview">
          <h1>{data.title}</h1>
        </Link>

        <div className="stars">
          {stars.map((star, i) => (
            <div key={i}>
              {star ? <AiFillStar /> : <AiOutlineStar />}
            </div>
          ))}
        </div>
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