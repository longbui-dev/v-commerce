import { Card } from 'antd'
import { useNavigate } from 'react-router-dom'
import './index.scss'

const { Meta } = Card

interface PropsSmallAdver {
  id: number
  image: string
  title: string
  description: string
}

function SmallAdver(props: PropsSmallAdver) {
  const navigate = useNavigate()
  const moveToDetailProductPage = (id: number) => {
    navigate(`/pageDetailProduct/${id}`)
  }

  return (
    <Card
      hoverable
      onClick={() => moveToDetailProductPage(props.id)}
      cover={
        <img
          alt="advertimentProducts"
          src={props.image}
          className="px-14 py-6 smallAdverImg"
        />
      }
      className="w-60 secondColorBg productHover"
    >
      <Meta
        className="capitalize text-center smallAdverInfor"
        title={props.title}
        description={props.description}
      />
    </Card>
  )
}

export default SmallAdver
