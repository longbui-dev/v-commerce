import { Typography } from 'antd'
import { useNavigate } from 'react-router-dom'
import '../../../App.scss'

const { Title } = Typography
interface PropsInformationNewArrivals {
  id: number
  title: string
  price: number
}

function InformationNewArrivals(props: PropsInformationNewArrivals) {
  const navigate = useNavigate()
  const moveToDetailProductPage = (id: number) => {
    navigate(`/pageDetailProduct/${id}`)
  }

  return (
    <div className="p-4" onClick={() => moveToDetailProductPage(props.id)}>
      <Title level={5} className="flex justify-center titleColor textHover">
        {props.title}
      </Title>
      <p className="flex justify-center mt-2 text-base titleColor">
        $ {props.price}
      </p>
    </div>
  )
}

export default InformationNewArrivals
