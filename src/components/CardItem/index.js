import './index.css'

const CardItem = props => {
  const {cardsList} = props
  const {title, description, imgUrl, className} = cardsList
  return (
    <li className={`${className} card-container `}>
      <h1 className="card-title">{title}</h1>
      <p className="card-description">{description}</p>
      <div className="image-container">
        <img src={imgUrl} className="card-img" alt={title} />
      </div>
    </li>
  )
}

export default CardItem
