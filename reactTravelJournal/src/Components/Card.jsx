import React from 'react'
import marker from '../images/marker.svg'

const Card = (props) => {
  return (
    <div>
      <div className='image-container'>
        <img src={props.imageURL} alt="location" />
      </div>
      <div className='info-container'>
        <div>
          <img className="marker" src={marker} alt="marker" />
          <p className='location'>{props.location}</p>
          <a className="link" href={props.gMapsLink} target='_blank'>View on Google Maps</a>
        </div>
        <h1 className="landmark">{props.title}</h1>
        <p className='date'>{props.startDate} - {props.endDate}</p>
        <p className='description'>{props.description}</p>
      </div>
      <div className='border'></div>
    </div>
  )
}

export default Card