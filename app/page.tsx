'use client'

import { useEffect, useState } from 'react'
import TelegramInit from './components/TelegramInit'

declare global {
  interface Window {
    show_10544894: any
  }
}

export default function Home() {
  const [users, setUsers] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  // Fetch users data from API
  const fetchUsers = async () => {
    try {
      const res = await fetch('/api')
      const data = await res.json()
      setUsers(data.usersData || [])
    } catch (err) {
      console.error('Failed to fetch users', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  const showRewardedInterstitial = async () => {
    await window.show_10544894()
    alert('🎉 Reward granted!')
    fetchUsers() // refresh data
  }

  const showRewardedPopup = async () => {
    await window.show_10544894('pop')
    alert('🎁 Popup reward granted!')
    fetchUsers()
  }

  const showInApp = () => {
    window.show_10544894({
      type: 'inApp',
      inAppSettings: {
        frequency: 2,
        capping: 0.1,
        interval: 30,
        timeout: 5,
        everyPage: false,
      },
    })
  }

  return (
    <main style={{ padding: 20 }}>
      <TelegramInit />

      <h1>🎮 Monetag Telegram Mini App</h1>

      <button className='hover:text-red-500' onClick={showRewardedInterstitial}>
        Rewarded Interstitial
      </button>

      <br /><br />

      <button className='hover:text-red-500' onClick={showRewardedPopup}>
        Rewarded Popup
      </button>

      <br /><br />

      <button className='hover:text-red-500' onClick={showInApp}>
        In-App Interstitial
      </button>

      <hr style={{ margin: '30px 0' }} />

      <h2>👤 Users Data</h2>

      {loading && <p>Loading...</p>}

      {!loading && users.length === 0 && <p>No data yet</p>}

      {users.map((user, index) => (
        <div
          key={index}
          style={{
            border: '1px solid #ccc',
            padding: 10,
            marginBottom: 10,
          }}
        >
          <div><b>Telegram ID:</b> {user.telegram_id}</div>
          <div><b>Event:</b> {user.event_type}</div>
          <div><b>Reward Type:</b> {user.reward_event_type}</div>
          <div><b>Estimated Price:</b> {user.estimated_price}</div>
          <div><b>Time:</b> {user.timestamp}</div>
        </div>
      ))}
    </main>
  )
}
