export interface Campaign {
  id: number
  title: string
  description: string
  goal: number
  raised: number
  status: 'active' | 'completed' | 'draft'
}