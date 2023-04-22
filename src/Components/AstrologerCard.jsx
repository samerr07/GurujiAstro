import React from 'react'
import "./astrologerCard.scss"

const AstrologerCard = ({ name, specialty, image, rating,description }) => {
  return (
   
    <div className="astrologer-card">
      <img src={image} alt={name} className="astrologer-card__image" />
      <h3 className="astrologer-card__name">{name}</h3>
      <p className="astrologer-card__specialty">{specialty}</p>
      <p className="astrologer-card__specialty">{description}</p>

      <div className="astrologer-card__rating">
        <span className="astrologer-card__rating-stars">{rating}</span>
        <span className="astrologer-card__rating-label">out of 5 stars</span>
      </div>
    </div>
  )
}

export default AstrologerCard
