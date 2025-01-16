import { useState, useEffect, useCallback } from 'react'
import { PublicKey } from '@solana/web3.js'
import { api } from '../services/api'

type PhantomEvent = "disconnect" | "connect" | "accountChanged"

interface ConnectOpts {
  onlyIfTrusted: boolean
}

interface PhantomProvider {
  connect: (opts?: Partial<ConnectOpts>) => Promise<{ publicKey: PublicKey }>
  disconnect: () => Promise<void>
  on: (event: PhantomEvent, callback: (args: any) => void) => void
  isPhantom: boolean
  isConnected: boolean
}

type WindowWithSolana = Window & { 
  solana?: PhantomProvider
}

interface PhantomWalletButtonProps {
  onTokenCheck: (hasToken: boolean) => void
}

export function PhantomWalletButton({ onTokenCheck }: PhantomWalletButtonProps) {
  const [walletKey, setWalletKey] = useState<string | null>(null)
  const [hasToken, setHasToken] = useState<boolean | null>(null)

  const getProvider = (): PhantomProvider | undefined => {
    if ("solana" in window) {
      const provider = (window as WindowWithSolana).solana
      if (provider?.isPhantom) {
        return provider
      }
    }
  }

  const checkForToken = useCallback(async () => {
    try {
      const walletInfo = await api.getWalletInfo()
      setHasToken(walletInfo.hasToken)
      onTokenCheck(walletInfo.hasToken)
    } catch (err) {
      console.error("Error checking for token:", err)
      setHasToken(false)
      onTokenCheck(false)
    }
  }, [onTokenCheck])

  const connectWallet = async () => {
    const provider = getProvider()
    if (provider) {
      try {
        const { publicKey } = await provider.connect()
        setWalletKey(publicKey.toString())
        await checkForToken()
      } catch (err) {
        console.error("Error connecting to wallet:", err)
      }
    }
  }

  const disconnectWallet = async () => {
    const provider = getProvider()
    if (provider) {
      try {
        await provider.disconnect()
        setWalletKey(null)
        setHasToken(null)
        onTokenCheck(false)
      } catch (err) {
        console.error("Error disconnecting wallet:", err)
      }
    }
  }

  useEffect(() => {
    const provider = getProvider()
    if (provider) {
      provider.on("connect", ({ publicKey }: { publicKey: PublicKey }) => {
        setWalletKey(publicKey.toString())
        checkForToken()
      })
      provider.on("disconnect", () => {
        setWalletKey(null)
        setHasToken(null)
        onTokenCheck(false)
      })
    }
  }, [checkForToken, onTokenCheck])

  if (!getProvider()) {
    return (
      <div className="text-red-400">Phantom wallet is not installed</div>
    )
  }

  if (walletKey) {
    return (
      <div className="space-y-2">
        <button 
          onClick={disconnectWallet}
          className="px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors text-lg sm:text-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
        >
          {walletKey.slice(0, 4)}...{walletKey.slice(-4)}
          {hasToken !== null && (
            <span className="ml-2">
              {hasToken ? '🌱' : '❌'}
            </span>
          )}
        </button>
      </div>
    )
  }

  return (
    <button 
      onClick={connectWallet}
      className="px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors text-lg sm:text-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
    >
      Connect Phantom
    </button>
  )
}

