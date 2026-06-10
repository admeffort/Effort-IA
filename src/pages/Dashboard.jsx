import { useUser } from '@clerk/clerk-react'
import '../styles/Dashboard.css'

export default function Dashboard() {
  const { user } = useUser()

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <p>Bem-vindo, {user?.firstName}!</p>
      <div className="dashboard-grid">
        <div className="card">
          <h3>IA Anthropic</h3>
          <p>Gere conteúdo com IA</p>
        </div>
        <div className="card">
          <h3>Pagamentos</h3>
          <p>Integração com Stripe</p>
        </div>
        <div className="card">
          <h3>Dados</h3>
          <p>Supabase Database</p>
        </div>
      </div>
    </div>
  )
}
