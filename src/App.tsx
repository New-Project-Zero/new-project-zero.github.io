import React from 'react'
import { Header } from './components/Header'
import { Countdown } from './components/Countdown'
import { WalletSection } from './components/WalletSection'
import { TokenInfo } from './components/TokenInfo'
import { SocialLinks } from './components/SocialLinks'
import { SproutEmojis } from './components/SproutEmojis'

export default function App() {
  const [hasToken, setHasToken] = React.useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-900 to-black text-white font-serif flex items-center justify-center">
      <div className="container mx-auto px-4 py-8 text-center">
        <Header />
        <main className="mt-12 space-y-12">
          <Countdown />
          <WalletSection onTokenCheck={setHasToken} />
          <TokenInfo />
          <SocialLinks />
        </main>
      </div>
      <SproutEmojis show={hasToken} />
    </div>
  )
}

