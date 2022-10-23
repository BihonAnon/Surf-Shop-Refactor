import Link from 'next/link'
import { useState } from 'react'
import { products, tags } from '../data'
import { Product } from '../interfaces'

type ProductProps = {
  product: Product
}
type CartProps = {
  products: []
}

function addToCart (product) {
  console.log(product)
  products.push(product)
  console.log(products)
}

export default function ProductComponent({ product }: ProductProps) {
  return (
    <li className='bg-yellow-300 rounded-xl p-1'>
      <Link href="/shop/[id]" as={`/shop/${product.id}`}>
        <a className='text-blue-700 font-bold'>{product.name}</a>
      </Link>
      <img className='rounded-xl p-1'src={product.image} alt={product.name} />
      
      <div className='font-semibold'>
        💲{product.price}
      </div>
        <button className='bg-yellow-400 p-1 rounded-xl realtive' onClick={() => addToCart(product)}>🛒</button>
      <div className='flex flex-wrap'>
        {product.tags.map((tag) => (
            <a className='bg-blue-100 p-0.5 m-1 text-xs align-middle rounded-md break-normal'>{tag.name}</a>
        ))}
      </div>
    </li>
  )
}
