// App.js

import React, {useState, useEffect} from 'react'
import axios from 'axios'
import EventList from './EventList'
import './App.css'

function App() {
  const [recommendedEvents, setRecommendedEvents] = useState([])
  const [upcomingEvents, setUpcomingEvents] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [upcomingPage, setUpcomingPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  useEffect(() => {
    fetchRecommendedEvents()
    fetchUpcomingEvents()
  }, [])

  const fetchRecommendedEvents = () => {
    // API endpoint for recommended events
    const recommendedEventsURL =
      'https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco'
    axios
      .get(recommendedEventsURL)
      .then(response => {
        setRecommendedEvents(response.data.events)
      })
      .catch(error => {
        console.error('Error fetching recommended events:', error)
      })
  }

  const fetchUpcomingEvents = () => {
    setIsLoading(true)
    // API endpoint for upcoming events
    const upcomingEventsURL = `https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=1&type=upcoming`

    axios
      .get(upcomingEventsURL)
      .then(response => {
        setUpcomingEvents(prevEvents => [
          ...prevEvents,
          ...response.data.events,
        ])
        setTotalPages(response.data.totalPages)
        setIsLoading(false)
      })
      .catch(error => {
        console.error('Error fetching upcoming events:', error)
        setIsLoading(false)
      })
  }

  const handleLoadMore = () => {
    if (upcomingPage < totalPages) {
      setUpcomingPage(prevPage => prevPage + 1)
      fetchUpcomingEvents()
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img
          src="https://drive.google.com/file/d/1hFKPSETzU0K0U9pgcpcvoVk0XCEJxQ8k/view?usp=sharing"
          alt="Banner"
        />
      </header>
      <div className="App-content">
        <h1>Recommended Events</h1>
        <EventList events={recommendedEvents} />

        <h1>Upcoming Events</h1>
        <EventList events={upcomingEvents} />
        {isLoading && <p>Loading...</p>}
        {!isLoading && upcomingPage < totalPages && (
          <button onClick={handleLoadMore}>Load More</button>
        )}
      </div>
    </div>
  )
}

export default App
