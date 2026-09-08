export interface Post {
  _id: string
  productName: string
  slug: string
  description: string
  image: string
  price?: number
  model?: string
  category?: string
}