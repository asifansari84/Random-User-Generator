import { useCallback, useEffect, useState } from 'react'
import './App.css'

const API_URL = 'https://api.freeapi.app/api/v1/public/randomusers/user/random'

async function requestRandomUser() {
  const response = await fetch(API_URL, {
    method: 'GET',
    headers: { accept: 'application/json' },
  })

  if (!response.ok) {
    throw new Error('Unable to fetch a random user right now.')
  }

  const result = await response.json()

  if (!result.success || !result.data) {
    throw new Error(result.message || 'The API returned an empty profile.')
  }

  return result.data
}

function formatDate(dateString) {
  return new Intl.DateTimeFormat('en', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(new Date(dateString))
}

function App() {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  const fetchRandomUser = useCallback(async () => {
    setIsLoading(true)
    setError('')

    try {
      const randomUser = await requestRandomUser()
      setUser(randomUser)
    } catch (err) {
      setError(err.message || 'Something went wrong while loading the user.')
      setUser(null)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    requestRandomUser()
      .then((randomUser) => {
        setUser(randomUser)
      })
      .catch((err) => {
        setError(err.message || 'Something went wrong while loading the user.')
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  const fullName = user
    ? `${user.name.title}. ${user.name.first} ${user.name.last}`
    : 'Random User'

  return (
    <main className="app-shell">
      <section className="profile-panel" aria-busy={isLoading}>
        <div className="panel-header">
          <div>
            <p className="eyebrow">FreeAPI random user</p>
            <h1>Random User Generator</h1>
          </div>

          <button
            className="refresh-button"
            type="button"
            onClick={fetchRandomUser}
            disabled={isLoading}
          >
            {isLoading ? 'Loading...' : 'New User'}
          </button>
        </div>

        {error && (
          <div className="status-message error" role="alert">
            {error}
          </div>
        )}

        {isLoading && !user && (
          <div className="status-message">Loading random user profile...</div>
        )}

        {user && (
          <div className="profile-layout">
            <aside className="identity-card">
              <img src={user.picture.large} alt={fullName} />
              <span className="nationality">{user.nat}</span>
              <h2>{fullName}</h2>
              <p>{user.email}</p>
              <div className="quick-stats">
                <span>
                  <strong>{user.dob.age}</strong>
                  Age
                </span>
                <span>
                  <strong>{user.gender}</strong>
                  Gender
                </span>
              </div>
            </aside>

            <section className="details-grid" aria-label="User details">
              <article>
                <span>Username</span>
                <strong>{user.login.username}</strong>
              </article>
              <article>
                <span>Phone</span>
                <strong>{user.phone}</strong>
              </article>
              <article>
                <span>Cell</span>
                <strong>{user.cell}</strong>
              </article>
              <article>
                <span>Date of birth</span>
                <strong>{formatDate(user.dob.date)}</strong>
              </article>
              <article className="wide">
                <span>Address</span>
                <strong>
                  {user.location.street.number} {user.location.street.name},{' '}
                  {user.location.city}, {user.location.country}
                </strong>
              </article>
              <article>
                <span>Timezone</span>
                <strong>{user.location.timezone.description}</strong>
              </article>
              <article>
                <span>Coordinates</span>
                <strong>
                  {user.location.coordinates.latitude},{' '}
                  {user.location.coordinates.longitude}
                </strong>
              </article>
            </section>
          </div>
        )}
      </section>
    </main>
  )
}

export default App
