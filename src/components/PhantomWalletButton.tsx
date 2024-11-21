import { useEffect, useState } from 'react'
import { PublicKey, Connection } from '@solana/web3.js'

type PhantomProvider = {
  connect: () => Promise<{ publicKey: PublicKey }>
  disconnect: () => Promise<void>
  on: (event: string, callback: (args: any) => void) => void
  isConnected: boolean
  publicKey: PublicKey | null
}

const getProvider = (): PhantomProvider | undefined => {
  if ('solana' in window) {
    const provider = (window as any).solana
    if (provider.isPhantom) return provider
  }
}

export default function PhantomWalletButton() {
  const [provider, setProvider] = useState<PhantomProvider | undefined>(undefined)
  const [walletKey, setWalletKey] = useState<string | undefined>(undefined)
  const [hasToken, setHasToken] = useState<boolean | undefined>(undefined)

  useEffect(() => {
    const provider = getProvider()
    if (provider) setProvider(provider)
    else setProvider(undefined)
  }, [])

  const connectWallet = async () => {
    if (provider) {
      try {
        const { publicKey } = await provider.connect()
        setWalletKey(publicKey.toString())
        checkForToken(publicKey)
      } catch (err) {
        console.error("Error connecting to wallet:", err)
      }
    }
  }

  const checkForToken = async (publicKey: PublicKey) => {
    // Replace with your specific token's mint address
    const tokenMintAddress = new PublicKey('2Xf4kHq69r4gh763aTGN82XvYzPMhXrRhAEJ29trpump')
    const connection = new Connection('https://mainnet.helius-rpc.com/?api-key=f9866e76-2615-4709-8544-edf6be593606')

    try {
      const tokenAccounts = await connection.getParsedTokenAccountsByOwner(publicKey, { mint: tokenMintAddress })
      setHasToken(tokenAccounts.value.length > 0)
    } catch (err) {
      console.error("Error checking for token:", err)
      setHasToken(undefined)
    }
  }

  if (!provider) {
    return <div>Phantom wallet is not installed</div>
  }

  return (
    <button 
      onClick={connectWallet}
      style={{
        fontSize: '0.9rem',
        padding: '0.5rem 1rem',
        backgroundColor: '#9945FF',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
      }}
    >
      {walletKey ? (
        <span>
          {walletKey.slice(0, 4)}...{walletKey.slice(-4)}
          {hasToken !== undefined && (
            <span style={{ marginLeft: '0.5rem' }}>
              {hasToken ? '🌱' : '❌'}
            </span>
          )}
        </span>
      ) : (
        'Connect Phantom'
      )}
    </button>
  )
}

