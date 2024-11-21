import { useEffect, useState } from 'react'
import PhantomWalletButton from './components/PhantomWalletButton'

export default function App() {
  const [countdown, setCountdown] = useState('Loading...')

  useEffect(() => {
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
    <div style={{
      margin: 0,
      padding: 0,
      backgroundColor: 'black',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      minHeight: '100vh',
      textAlign: 'center',
      fontFamily: "'Courier New', monospace",
      fontSize: '1.6rem',
    }}>
      <h1 style={{
        fontFamily: 'Garamond, serif',
        fontSize: '6rem',
        marginTop: '10vh',
        marginBottom: '1rem',
      }}>New Project Zero</h1>
      <div id="countdown" style={{
        fontSize: '2rem',
        fontFamily: "'Courier New', monospace",
        marginBottom: '2rem',
      }}>{countdown}</div>
      
      <div style={{ marginBottom: '2rem' }}>
        <PhantomWalletButton />
      </div>
      dev wallet:
      <div className="wallet-content" style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        marginBottom: '2rem',
      }}>
        <svg width="25" height="22" viewBox="0 0 101 88" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100.48 69.3817L83.8068 86.8015C83.4444 87.1799 83.0058 87.4816 82.5185 87.6878C82.0312 87.894 81.5055 88.0003 80.9743 88H1.93563C1.55849 88 1.18957 87.8926 0.874202 87.6912C0.558829 87.4897 0.31074 87.2029 0.160416 86.8659C0.0100923 86.529 -0.0359181 86.1566 0.0280382 85.7945C0.0919944 85.4324 0.263131 85.0964 0.520422 84.8278L17.2061 67.408C17.5676 67.0306 18.0047 66.7295 18.4904 66.5234C18.9762 66.3172 19.5002 66.2104 20.0301 66.2095H99.0644C99.4415 66.2095 99.8104 66.3169 100.126 66.5183C100.441 66.7198 100.689 67.0067 100.84 67.3436C100.99 67.6806 101.036 68.0529 100.972 68.415C100.908 68.7771 100.737 69.1131 100.48 69.3817ZM83.8068 34.3032C83.4444 33.9248 83.0058 33.6231 82.5185 33.4169C82.0312 33.2108 81.5055 33.1045 80.9743 33.1048H1.93563C1.55849 33.1048 1.18957 33.2121 0.874202 33.4136C0.558829 33.6151 0.31074 33.9019 0.160416 34.2388C0.0100923 34.5758 -0.0359181 34.9482 0.0280382 35.3103C0.0919944 35.6723 0.263131 36.0083 0.520422 36.277L17.2061 53.6968C17.5676 54.0742 18.0047 54.3752 18.4904 54.5814C18.9762 54.7875 19.5002 54.8944 20.0301 54.8952H99.0644C99.4415 54.8952 99.8104 54.7879 100.126 54.5864C100.441 54.3849 100.689 54.0981 100.84 53.7612C100.99 53.4242 101.036 53.0518 100.972 52.6897C100.908 52.3277 100.737 51.9917 100.48 51.723L83.8068 34.3032ZM1.93563 21.7905H80.9743C81.5055 21.7907 82.0312 21.6845 82.5185 21.4783C83.0058 21.2721 83.4444 20.9704 83.8068 20.592L100.48 3.17219C100.737 2.90357 100.908 2.56758 100.972 2.2055C101.036 1.84342 100.99 1.47103 100.84 1.13408C100.689 0.79713 100.441 0.510296 100.126 0.308823C99.8104 0.107349 99.4415 1.24074e-05 99.0644 0L20.0301 0C19.5002 0.000878397 18.9762 0.107699 18.4904 0.313848C18.0047 0.519998 17.5676 0.821087 17.2061 1.19848L0.524723 18.6183C0.267681 18.8866 0.0966198 19.2223 0.0325185 19.5839C-0.0315829 19.9456 0.0140624 20.3177 0.163856 20.6545C0.31365 20.9913 0.561081 21.2781 0.875804 21.4799C1.19053 21.6817 1.55886 21.7896 1.93563 21.7905Z" fill="url(#paint0_linear_174_4403)"/>
          <defs>
            <linearGradient id="paint0_linear_174_4403" x1="8.52558" y1="90.0973" x2="88.9933" y2="-3.01622" gradientUnits="userSpaceOnUse">
              <stop offset="0.08" stopColor="#9945FF"/>
              <stop offset="0.3" stopColor="#8752F3"/>
              <stop offset="0.5" stopColor="#5497D5"/>
              <stop offset="0.6" stopColor="#43B4CA"/>
              <stop offset="0.72" stopColor="#28E0B9"/>
              <stop offset="0.97" stopColor="#19FB9B"/>
            </linearGradient>
          </defs>
        </svg>
        <div className="wallet-address" style={{
          fontFamily: "'Courier New', monospace",
          fontSize: '1.4rem',
        }}>
          <a href="https://solscan.io/account/9pYPFfe1pUu86YmWhK1AnD46mBkYqV8eDQyUP8VQxnZo" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'white' }}>
            9pYPFfe1pUu86YmWhK1AnD46mBkYqV8eDQyUP8VQxnZo
          </a>
        </div>
      </div>
      $NEWP
      <div className="wallet-content" style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        marginBottom: '2rem',
      }}>
        <img src="NEWPicon.png" alt="NEWP" style={{ width: '32px', height: '32px' }} />
        <div className="wallet-address" style={{
          fontFamily: "'Courier New', monospace",
          fontSize: '1.4rem',
        }}>
          <a href="https://solscan.io/account/2Xf4kHq69r4gh763aTGN82XvYzPMhXrRhAEJ29trpump" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'white' }}>
            2Xf4kHq69r4gh763aTGN82XvYzPMhXrRhAEJ29trpump
          </a>
        </div>
      </div>
      
      <div className="social-links" style={{
        display: 'flex',
        gap: '2rem',
        marginTop: '2rem',
      }}>
        <a href="https://github.com/New-Project-Zero" className="social-link" target="_blank" rel="noopener noreferrer">
          <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" style={{ width: '32px', height: '32px' }}>
            <path fill="#ffffff" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
          </svg>
        </a>
        <a href="https://x.com/project0ver" className="social-link" target="_blank" rel="noopener noreferrer">
          <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ width: '32px', height: '32px' }}>
            <path fill="#ffffff" d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>
          </svg>
        </a>
        <a href="https://t.me/+SDhcKBHPDjgyMDVh" className="social-link" target="_blank" rel="noopener noreferrer">
          <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511 512.32" style={{ width: '32px', height: '32px' }}>
            <path fill="#fff" d="M9.72 185.88L489.19 1.53c3.64-1.76 7.96-2.08 12.03-.53 7.83 2.98 11.76 11.74 8.78 19.57L326.47 502.56h-.02c-1.33 3.49-3.94 6.5-7.57 8.25-7.54 3.63-16.6.47-20.23-7.06l-73.78-152.97 146.67-209.97-209.56 146.3L8.6 213.64a15.117 15.117 0 01-7.6-8.25c-2.98-7.79.93-16.53 8.72-19.51z"/>
          </svg>
        </a>
        <a href="https://kick.com/crom-dev" className="social-link" target="_blank" rel="noopener noreferrer">
          <svg className="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" style={{ width: '32px', height: '32px' }}>
            <path stroke="#ffffff" strokeLinejoin="round" d="M2.86957 1.5h6.84782v4.56522H12V3.78261h2.2826V1.5h6.8478v6.84783h-2.2826v2.28257h-2.2826v2.7392h2.2826v2.2826h2.2826V22.5h-6.8478v-2.2826H12v-2.2826H9.71739V22.5H2.86957v-21Z" strokeWidth="1"/>
          </svg>
        </a>
      </div>
    </div>
  )
}

