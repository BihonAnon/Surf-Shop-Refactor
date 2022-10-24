import Admin from "../../components/Admin";

//account props
type AccountProps = {
    user: any;
    setUser: any;
};
var isAdmin = true;
//account page
export default function Account() {
    return (
        <>
            {isAdmin ? <Admin /> :
                (<div className='grid grid-cols-3 gap-5 p-3 py-20 bg-yellow-50'>
                    <div className=' col-start-2 col-end-3 text-center'>
                        <h1 className='text-5xl underline font-bold text-slate-600'>Account</h1>
                        <div className='flex flex-col py-5'>
                            <button className='bg-yellow-500 p-2 rounded-lg'>Past Orders</button>
                        </div>
                        <div className='flex flex-col py-5'>
                            <button className='bg-yellow-500 p-2 rounded-lg'>Account Information</button>
                        </div>
                        <div className='flex flex-col py-5'>
                            <button className='bg-yellow-500 p-2 rounded-lg'>Logout</button>
                        </div>
                    </div>
                </div>)}
        </>
    )
}