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

interface PhantomWalletButtonProps {
  onTokenCheck: (hasToken: boolean) => void
}

export function PhantomWalletButton({ onTokenCheck }: PhantomWalletButtonProps) {
  const [provider, setProvider] = useState<PhantomProvider | undefined>(undefined)
  const [walletKey, setWalletKey] = useState<string | undefined>(undefined)
  const [hasToken, setHasToken] = useState<boolean | undefined>(undefined)
  const [isModalOpen, setIsModalOpen] = useState(false)

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
        await checkForToken(publicKey)
        setIsModalOpen(true)
      } catch (err) {
        console.error("Error connecting to wallet:", err)
      }
    }
  }

  const checkForToken = async (publicKey: PublicKey) => {
    const tokenMintAddress = new PublicKey('2Xf4kHq69r4gh763aTGN82XvYzPMhXrRhAEJ29trpump')
    let connection; // Declare connection outside the try block
  
    try {
      // Fetch the API key from the '/api/helius-api-key' endpoint
      const response = await fetch('/api/helius-api-key');
      const data = await response.json();
      const apiKey = data.apiKey;
  
      connection = new Connection(`https://mainnet.helius-rpc.com/?api-key=${apiKey}`)
    } catch (err) {
      console.error("API error:", err)
      setHasToken(false)
      onTokenCheck(false)
      return; // Exit the function if API call fails
    }
  
    try {
      // Now you can use the connection object here
      const tokenAccounts = await connection.getParsedTokenAccountsByOwner(publicKey, { mint: tokenMintAddress })
      const tokenFound = tokenAccounts.value.length > 0
      setHasToken(tokenFound)
      onTokenCheck(tokenFound)
    } catch (err) {
      console.error("Error checking for token:", err)
      setHasToken(false)
      onTokenCheck(false)
    }
  }

  const ModalPopup = () => {
    if (!isModalOpen) return null

    return (
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
        onClick={() => setIsModalOpen(false)}
      >
        <div 
          className="bg-green-900 p-6 rounded-lg text-center max-w-sm w-11/12"
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className={`text-xl mb-4 ${hasToken ? 'text-green-400' : 'text-red-400'}`}>
            {hasToken ? 'NEWP Holder' : 'Coming soon..'}
          </h2>
          <p className="mb-4">
            {hasToken 
              ? "NEWP holder detected. Welcome aboard. Soon you have access to a suite of capabilities integrated with 0verman." 
              : "Under construction"}
          </p>
          <button 
            onClick={() => setIsModalOpen(false)}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    )
  }

  if (!provider) {
    return <div className="text-red-400">Phantom wallet is not installed</div>
  }

  return (
    <>
      <button 
        onClick={connectWallet}
        className="px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors text-lg sm:text-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
      >
        {walletKey ? (
          <span>
            {walletKey.slice(0, 4)}...{walletKey.slice(-4)}
            {hasToken !== undefined && (
              <span className="ml-2">
                {hasToken ? '🌱' : '🌱'}
              </span>
            )}
          </span>
        ) : (
          'Connect Phantom'
        )}
      </button>

      <ModalPopup />
    </>
  )
}

