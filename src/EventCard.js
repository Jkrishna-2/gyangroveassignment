// EventCard.js

import React from 'react'

function EventCard({event}) {
  return (
    <div className="EventCard">
      <img src={event.imgUrl} alt={event.eventName} />
      <h3>{event.eventName}</h3>
      <p>{event.cityName}</p>
      <p>{event.date}</p>
      <p>{event.weather}</p>
    </div>
  )
}

export default EventCard
