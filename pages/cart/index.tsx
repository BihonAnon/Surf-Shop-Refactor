//cart props
type CartProps = {
    products: []
 }

export default function Cart( { products }: CartProps) {
    console.log(products)
    return (
        <>
            <div className='grid grid-cols-3 gap-5 p-3 py-20 bg-yellow-50'>
                <div className=' col-start-2 col-end-3 text-center'>
                    <h1 className='text-5xl underline font-bold text-slate-600'>Cart</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {products.map((product) => (
                                <tr>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>{product.quantity}</td>
                                    <td>{product.price * product.quantity}</td>
                                </tr>
                            ))} */}
                        </tbody>
                    </table>
                    <div className='flex flex-col py-5'>
                        <button className='bg-yellow-500 p-2 rounded-lg'>Checkout</button>
                    </div>
                    <div className='flex flex-col py-5'>
                        <button className='bg-yellow-500 p-2 rounded-lg'>Empty Cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}
