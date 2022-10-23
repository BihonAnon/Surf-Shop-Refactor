export default function Index() {
    return (
        <>
            <div className='grid grid-cols-3 gap-5 p-3 py-20 bg-yellow-50'>
                <div className=' col-start-2 col-end-3 text-center'>
                    <h1 className='text-5xl underline font-bold text-slate-600'>Login</h1>
                    <form>
                        <div className='flex flex-col'>
                            <label className='text-xl font-bold text-slate-600 p-2'>Email</label>
                            <input type='email' className='border-2 border-gray-300 p-2 rounded-lg' />
                        </div>
                        <div className='flex flex-col'>
                            <label className='text-xl font-bold text-slate-600 p-2'>Password</label>
                            <input type='password' className='border-2 border-gray-300 p-2 rounded-lg' />
                        </div>
                    </form>
                    <div className='flex flex-col py-5'>
                        <button className='bg-yellow-500 p-2 rounded-lg'>Login</button>
                    </div>
                </div>
            </div>
            <div className='bg-yellow-50 p-10'></div>
        </>
    )
}
