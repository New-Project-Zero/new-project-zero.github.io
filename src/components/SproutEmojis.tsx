import React, { useState, useEffect } from 'react'
import { useTransition, animated, config } from '@react-spring/web'

interface SproutEmoji {
  id: number
  x: number
}

export const SproutEmojis: React.FC<{ show: boolean }> = ({ show }) => {
  const [sprouts, setSprouts] = useState<SproutEmoji[]>([])

  useEffect(() => {
    if (show) {
      const interval = setInterval(() => {
        setSprouts(sprouts => [
          ...sprouts,
          {
            id: Date.now(),
            x: Math.random() * window.innerWidth
          }
        ])
      }, 500)
      return () => clearInterval(interval)
    }
  }, [show])

  const transitions = useTransition(sprouts, {
    from: { y: window.innerHeight, opacity: 0 },
    enter: { y: window.innerHeight - 100, opacity: 1 },
    leave: { y: -50, opacity: 0 },
    config: config.wobbly,
    onRest: (_, item) => {
      setSprouts(sprouts => sprouts.filter(s => s.id !== item.id))
    },
  })

  if (!show) return null

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {transitions((style, item) => (
        <animated.div
          key={item.id}
          style={{
            ...style,
            position: 'absolute',
            left: item.x,
            fontSize: '2rem',
          }}
          aria-hidden="true"
        >
          🌱
        </animated.div>
      ))}
    </div>
  )
}