const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

export const api = {
  async getTokenInfo() {
    const response = await fetch(`${API_URL}/tokens`)
    if (!response.ok) throw new Error('Failed to fetch token info')
    return response.json()
  },

  async getTokenPrice() {
    const response = await fetch(`${API_URL}/tokens/price`)
    if (!response.ok) throw new Error('Failed to fetch token price')
    return response.json()
  },

  async getWalletInfo() {
    const response = await fetch(`${API_URL}/users/wallet-info`)
    if (!response.ok) throw new Error('Failed to fetch wallet info')
    return response.json()
  },
}

