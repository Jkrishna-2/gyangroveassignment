import React from 'react'

const RecommendedEvents = ({events}) => {
  return (
    <div className="recommended-events">
      <h2>Recommended Events</h2>
      <div className="events-container">
        <div className="events">
          {events.map(event => (
            <div className="event" key={event.id}>
              {/* Display event details */}
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default RecommendedEvents
