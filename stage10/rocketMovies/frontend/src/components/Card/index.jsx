import { Container, TagCard } from "./styled";
// import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { Rating } from "../Rating";

// const stars = [true, true, true, true, false]

export function Card({ data, rate, ...rest }) {
  // const stars = []

  return (
    <Container {...rest}>
      <div className="title">
        <h1>{data.title}</h1>

        <div className="stars">
          {/* {stars.map((star, i) => (
            <div key={i}>
              {star ? <AiFillStar /> : <AiOutlineStar />}
            </div>
          ))} */}
          <Rating rate={data.rating} />
        </div>
      </div>

      <p>{data.description}</p>

      {
        data.tag_name &&
        <footer>
          {data.tag_name.map(tag =>
            <TagCard
              key={tag.tag_name}
              title={tag.tag_name}
            />
          )}
        </footer>
      }
    </Container>
  )
}