import React, {useState} from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

const UpcomingEvents = ({events}) => {
  const [items, setItems] = useState(events.slice(0, 5)) // Initially load 5 items
  const [hasMore, setHasMore] = useState(true)

  const fetchMoreData = () => {
    if (items.length >= events.length) {
      setHasMore(false)
      return
    }

    // Simulate loading more data with a delay
    setTimeout(() => {
      setItems(items.concat(events.slice(items.length, items.length + 5))) // Load 5 more items
    }, 1000)
  }

  return (
    <div className="upcoming-events">
      <h2>Upcoming Events</h2>
      <div className="events-container">
        <InfiniteScroll
          dataLength={items.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          endMessage={<p>No more events</p>}
          style={{overflow: 'visible'}} // Remove if you want to hide scrollbar
        >
          {items.map(event => (
            <div className="event" key={event.id}>
              {/* Display event details */}
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </div>
          ))}
        </InfiniteScroll>
      </div>
    </div>
  )
}

export default UpcomingEvents
