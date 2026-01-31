'use client'

import TelegramInit from './components/TelegramInit'

declare global {
  interface Window {
    show_10544894: any
  }
}

export default function Home() {
  const showRewardedInterstitial = async () => {
    await window.show_10544894()
    alert('🎉 Reward granted!')
  }

  const showRewardedPopup = async () => {
    await window.show_10544894('pop')
    alert('🎁 Popup reward granted!')
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

      <button onClick={showRewardedInterstitial}>
        Rewarded Interstitial
      </button>

      <br /><br />

      <button onClick={showRewardedPopup}>
        Rewarded Popup
      </button>

      <br /><br />

      <button onClick={showInApp}>
        In-App Interstitial
      </button>
    </main>
  )
}
