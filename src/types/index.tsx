export type Filter = {
  minPricePerMonth: number
  maxPricePerMonth: number
  minArea: number
  maxArea: number
  city: string
  district: string
  commune: string
}

export enum RentalStatus {
  AVAILABLE = 'available',
  RENTED = 'rented'
}

export type RentNews = {
  _id: string
  ownerId: string
  status: RentalStatus
  pricePerMonth: number
  area: number
  city: string
  district: string
  commune: string
  street: string
  houseNumber: number
  specificAddress: string
  title: string
  description: string
  imageUrl: string[]
  created_at: string
  updated_at: string
  startDay: Date
  endDay: Date
}

export type BlogType = {
  _id: string
  title: string
  content: string
  ownerId: string
  created_at: string
  updated_at: string
}
