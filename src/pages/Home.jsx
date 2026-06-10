import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
import { Link } from 'react-router-dom'
import '../styles/Home.css'

export default function Home() {
  return (
    <div className="home-container">
      <nav className="navbar">
        <h1>CopyAI PMES</h1>
        <div className="nav-right">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <Link to="/dashboard">Dashboard</Link>
            <UserButton />
          </SignedIn>
        </div>
      </nav>
      <main className="hero">
        <h2>Bem-vindo ao CopyAI PMES</h2>
        <p>Automação inteligente com IA para sua empresa</p>
        <SignedIn>
          <Link to="/dashboard" className="btn">Ir para Dashboard</Link>
        </SignedIn>
        <SignedOut>
          <SignInButton className="btn" />
        </SignedOut>
      </main>
    </div>
  )
}
