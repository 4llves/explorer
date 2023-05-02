import { Container } from './styles'

import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

export function Rating({ rate }) {
  const stars = []

  for (let i = 0; i < 5; i++) {
    let star = i < rate ? AiFillStar : AiOutlineStar

    stars.push(star)
  }

  return (
    <Container>
      {stars.map((Star, i) => (
        <Star key={i} />
      ))}
    </Container>
  );
}