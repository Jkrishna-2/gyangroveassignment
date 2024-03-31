// EventList.js

import React from 'react'
import EventCard from './EventCard'

function EventList({events}) {
  return (
    <div className="EventList">
      {events.map(event => (
        <EventCard key={event.eventName} event={event} />
      ))}
    </div>
  )
}

export default EventList
