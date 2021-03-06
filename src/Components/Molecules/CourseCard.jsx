import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'


const CourseCard = ({id, title, image, price, profesor}) => (
  <article class="card">
    <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
      <Link to={`/cursos/${id}`}>
        <img src={image} alt={title}/>
      </Link>
    </div>
    <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
        <h3 className="center">{title}</h3>
        <div className="s-main-center">
          {`${profesor}`}
        </div>
        <div className="s-main-center">
        <a className="button--ghost-alert button--tiny" target="_blank" rel="noreferrer" href="https://facebook.com">{`$ ${price} USD`}</a>
      </div>
    </div>
  </article> 
)

CourseCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  profesor: PropTypes.string
}

CourseCard.defaultProps = {
  title: "No se encontró título",
  image: "https://www.publicdomainpictures.net/pictures/280000/nahled/not-found-image-15383864787lu.jpg",
  price: "--",
  profesor: ""
}

export default CourseCard;