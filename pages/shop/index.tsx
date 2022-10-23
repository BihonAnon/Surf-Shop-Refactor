import useSWR from 'swr'
import ProductCompoent from '../../components/Product'
import { Product } from '../../interfaces'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function Index() {
  const { data, error } = useSWR('/api/shop', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <>
    
    <ul className='grid grid-cols-3 gap-5 p-3 bg-yellow-50'  >
      {data.map((p: Product) => (
        <ProductCompoent key={p.id} product={p} />
      ))}
    </ul>
    <div className='bg-yellow-50 p-10'>Super Secret Discount Code</div>
    </>
  )
}
