import { PhantomWalletButton } from './PhantomWalletButton'

interface WalletSectionProps {
  onTokenCheck: (hasToken: boolean) => void
}

export function WalletSection({ onTokenCheck }: WalletSectionProps) {
  return (
    <div className="text-center">
      <h3 className="text-1xl sm:text-2xl md:text-3xl mb-4">Hold $NEWP?</h3>
      <PhantomWalletButton onTokenCheck={onTokenCheck} />
    </div>
  )
}

