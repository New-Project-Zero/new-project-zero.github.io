import { PhantomWalletButton } from './PhantomWalletButton'

interface WalletSectionProps {
  onTokenCheck: (hasToken: boolean) => void
}

export function WalletSection({ onTokenCheck }: WalletSectionProps) {
  return (
    <div className="text-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4">Connect Wallet</h2>
      <PhantomWalletButton onTokenCheck={onTokenCheck} />
    </div>
  )
}

