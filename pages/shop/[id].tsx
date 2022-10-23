import { useRouter } from 'next/router'
import useSWR from 'swr'

const fetcher = async (url: string) => {
  const res = await fetch(url)
  const data = await res.json()

  if (res.status !== 200) {
    throw new Error(data.message)
  }
  return data
}

export default function Product() {
  const { query } = useRouter()
  const { data, error } = useSWR(
    () => query.id && `/api/shop/${query.id}`,
    fetcher
  )

  if (error) return <div>{error.message}</div>
  if (!data) return <div>Loading...</div>

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <p>{data.price}</p>
      <p>{data.category}</p>
      <p>{data.image}</p>
    </div>
  )
}
