import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { Anthropic } from '@anthropic-ai/sdk'
import Stripe from 'stripe'
import { createClient } from '@supabase/supabase-js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

// Middleware
app.use(cors())
app.use(express.json())

// Initialize services
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
)

// Routes
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// Anthropic AI endpoint
app.post('/api/generate', async (req, res) => {
  try {
    const { prompt } = req.body
    
    if (!prompt) {
      return res.status(400).json({ error: 'Prompt é necessário' })
    }

    const message = await anthropic.messages.create({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 1024,
      messages: [
        { role: 'user', content: prompt },
      ],
    })

    res.json({ response: message.content[0].text })
  } catch (error) {
    console.error('Erro ao gerar conteúdo:', error)
    res.status(500).json({ error: 'Erro ao gerar conteúdo' })
  }
})

// Stripe payment endpoint
app.post('/api/create-payment-intent', async (req, res) => {
  try {
    const { amount, currency = 'usd' } = req.body

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
    })

    res.json({ clientSecret: paymentIntent.client_secret })
  } catch (error) {
    console.error('Erro ao criar pagamento:', error)
    res.status(500).json({ error: 'Erro ao criar pagamento' })
  }
})

// Supabase data endpoint
app.get('/api/data', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('your_table')
      .select('*')

    if (error) throw error
    res.json(data)
  } catch (error) {
    console.error('Erro ao buscar dados:', error)
    res.status(500).json({ error: 'Erro ao buscar dados' })
  }
})

// Error handling
app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).json({ error: 'Erro interno do servidor' })
})

// Start server
app.listen(PORT, () => {
  console.log(`✅ Backend rodando em http://localhost:${PORT}`)
  console.log(`📝 Ambiente: ${process.env.NODE_ENV || 'development'}`)
})
