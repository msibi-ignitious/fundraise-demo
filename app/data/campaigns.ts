import type { Campaign } from '~/types/campaign'

export const campaigns: Campaign[] = [
  {
    id: 1,
    title: 'Feed a Family',
    description:
      'Help provide nutritious meals to families facing food insecurity.',
    goal: 20000,
    raised: 12500,
    status: 'active'
  },

  {
    id: 2,
    title: 'Education for All',
    description:
      'Help provide learning resources and opportunities for children.',
    goal: 15000,
    raised: 8000,
    status: 'active'
  },

  {
    id: 3,
    title: 'Clean Water Project',
    description:
      'Help communities gain access to safe and clean drinking water.',
    goal: 25000,
    raised: 25000,
    status: 'completed'
  }
]