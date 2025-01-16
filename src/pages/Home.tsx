import { SocialLinks } from '../components/SocialLinks'

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto prose prose-invert text-center">
      <h1 className="text-7xl mb-8">New Project Zero</h1>
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <a href="https://dexscreener.com/solana/ci9grgyxhmswyqbz74y9pnmzqrqgpvj3gmscneguvnps" target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base break-all text-green-400">
            2Xf4kHq69r4gh763aTGN82XvYzPMhXrRhAEJ29trpump
          </a>
        </div>
        <div className="fixed bottom-10 left-0 w-full"> 
          <SocialLinks/>
        </div>
      </div>      
  )
}

