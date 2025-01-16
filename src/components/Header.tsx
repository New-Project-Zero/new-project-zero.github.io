import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const location = useLocation()
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'text-green-400' : 'text-gray-300 hover:text-white'
  }

  return (
    <header className=" backdrop-blur-sm py-4 sticky top-0 z-50">
      <nav className="container mx-auto px-4">
        <ul className="flex space-x-8 justify-center">
          <li>
            <Link to="/" className={isActive('/')}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className={isActive('/about')}>
              0verman
            </Link>
          </li>
          <li>
            <Link to="/homunculus" className={isActive('/homunculus')}>
              $NEWP
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

