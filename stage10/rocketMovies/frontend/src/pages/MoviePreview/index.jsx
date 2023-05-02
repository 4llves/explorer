import { Container, Content } from "./styles";
import { ButtonText } from '../../components/ButtonText'
import { Header } from '../../components/Header'
import { Rating } from '../../components/Rating'
import { Tag } from '../../components/Tag'
import { FiArrowLeft, FiCornerUpLeft } from 'react-icons/fi'
import { BiTime } from 'react-icons/bi'
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from '../../services/api'
import { useAuth } from "../../hooks/auth";

const stars = [true, true, true, true, false]

const tags = ["Drama", "Ficção Científica", "Família"]

import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
import { FormatData } from "../../utils/formatData";

//tentar por um trailer do filme rodando de fundo - Ideia do Gabriel

export function MoviePreview() {
  const { user } = useAuth();
  const [data, setData] = useState(null);

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  const params = useParams(); //useParamas é para buscar pelos parametros da rota
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1)
  }

  useEffect(() => {
    async function fetchNote() {
      const res = await api.get(`/notes/${params.id}`);
      console.log(res.data)
      setData(res.data);
    }

    fetchNote();
  }, []);



  return (
    <Container>
      <Header />

      {
        data &&
        <main>
          <Content>
            <header>
              <ButtonText
                icon={FiArrowLeft}
                title="voltar"
                onClick={handleBack}
              />

              <div className="title">
                <h1>{data.movie.title}</h1>

                {/* {stars.map((star, i) => (
                  <div key={i}>
                    {star ? <AiFillStar /> : <AiOutlineStar />}
                  </div>
                ))} */}

                <Rating rate={data.movie.rating} />

              </div>


              <div className="subtitle">
                <img src={avatarUrl} alt="" />
                <p>Por {data.user.name}</p>

                <BiTime />
                {/* {data.movie.updated_at} */}
                <FormatData data={data.movie.updated_at} />
              </div>

              <div className="tags">
                {
                  data.tags.map((tag, i) => (
                    <Tag
                      key={i}
                      title={tag.tag_name}
                    />
                  ))
                }
              </div>

            </header>

            <p>
              {data.movie.description}
            </p>
          </Content>
        </main>
      }




    </Container>
  )
}
