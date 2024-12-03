import React from 'react'

export function Countdown() {
  const [countdown, setCountdown] = React.useState('Loading...')

  React.useEffect(() => {
    function updateCountdown() {
      const targetDate = new Date('January 1, 2025 12:00:00 CST').getTime()
      const now = new Date().getTime()
      const difference = targetDate - now

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`)

      if (difference < 0) {
        clearInterval(timer)
        setCountdown('Initiating next phase...')
      }
    }

    const timer = setInterval(updateCountdown, 1000)
    updateCountdown() // Initial call to avoid delay

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="text-center">
      <div className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl ">
        {countdown}
      </div>
    </div>
  )
}

