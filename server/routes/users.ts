import { Router } from 'express'
import type { Request, Response } from 'express'

const router = Router()

router.get('/wallet-info', async (req: Request, res: Response) => {
  try {
    // This is mock data. In a real application, you'd fetch this from a database
    // or another service based on the authenticated user
    const walletInfo = {
      address: "5Uj9qHiQRSPBJxGQq1gQYKrTZwAyZHSHNHTGKSwMSKVA",
      balance: "1000",
      hasToken: true
    }
    res.json(walletInfo)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch wallet information' })
  }
})

export { router as userRouter }

