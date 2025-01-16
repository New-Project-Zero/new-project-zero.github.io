import { PhantomWalletButton } from './PhantomWalletButton'

export function WalletSection() {
  return (
    <div className="text-center">
      <h3 className="text-1xl sm:text-2xl md:text-3xl mb-4">Hold $NEWP?</h3>
      <PhantomWalletButton 
        onTokenCheck={(hasToken) => {
          console.log('Token check result:', hasToken)
        }} 
      />
    </div>
  )
}

