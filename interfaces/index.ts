export type Person = {
  id: string
  name: string
  height: string
  mass: string
  hair_color: string
  skin_color: string
  eye_color: string
  gender: string
}

export type Product = {
  id: string
  name: string
  price: number
  description: string
  category: Tags[]
  image: string
}
export type Tags = {
  id: string
  name: string
}

export type Order = {
  id: string
  client: User
  products: Product[]
  total: number
  status: string
  date: string
}

export type User = {
  id: string
  name: string
  email: string
  password: string
  orders: []
}
 
