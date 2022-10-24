import useSWR from 'swr'
import { Product } from '../../interfaces'

const fetcher = (url: string) => fetch(url).then((res) => res.json())
export default function Admin() {
    const { data, error } = useSWR('/api/shop', fetcher)

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>
  
    function handleDelete() {
        console.log("delete");
    }
    function handleEdit() {
        console.log("edit");
    }
    function handleAdd() {
        console.log("add");
    }
    return (
        <>
            <div className='grid grid-cols-3 gap-1 p-1 py-20 bg-yellow-50'>
                <div className=' col-start-1 col-end-3 text-center'>
                    <h1 className='text-5xl underline font-bold text-slate-600'>Admin</h1>
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Id</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Description</th>
                                    <th>Category</th>
                                    <th>Image</th>
                                    <th>Actions</th>
                                </tr>
                                <tr className='bg-yellow-100'>
                                    <td><input type="text" /></td>
                                    <td><input type="text" /></td>
                                    <td><input type="text" /></td>
                                    <td><input type="text" /></td>
                                    <td><input type="text" /></td>
                                    <td><input type="text" /></td>
                                    <td><input type="text" /></td>
                                    <td><button className='bg-yellow-200 rounded-xl' onClick={handleAdd}>Add Product</button></td>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((product) => (
                                    <tr key={product.id}>
                                        <td>{product.name}</td>
                                        <td>{product.id}</td>
                                        <td>{product.price}</td>
                                        <td>{product.quantity}</td>
                                        <td>{product.description}</td>
                                        <td>{product.category}</td>
                                        <td>{product.image}</td>
                                        <td>
                                            <button className='bg-blue-200 rounded-xl' onClick={handleEdit}>Edit</button>
                                            <button className='bg-red-200 rounded-xl' onClick={handleDelete}>Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
