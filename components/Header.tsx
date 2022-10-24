import Link from "next/link";
//login props
type LoginProps = {
    user: any;
    setUser: any;
};

var loggedIn = true;

export default function Header() {
    return (
        <header className="grid grid-cols-9 bg-yellow-50 p-4 fixed w-full bottom-0 x-10">
            <div className="col-span-2">
                <Link href="/">
                    <a className="text-5xl underline font-bold text-slate-600 titleFont">SURF</a>
                </Link>
            </div>
            <div className="col-span-7 flex justify-end align-middle p-3">
                <div>
                <Link href="/shop">
                    <a className="text-xl font-bold text-slate-600 p-2">Shop</a>
                </Link>
                </div>
                {loggedIn ?
                    (
                        <div>
                            <Link href="/cart">
                                <a className="text-xl font-bold text-slate-600 p-2">Cart</a>
                            </Link>
                            <Link href="/account">
                                <a className="text-xl font-bold text-slate-600 p-2">Account</a>
                            </Link>
                        </div>
                    ) : (
                        <div>
                            <Link href="/login">
                                <a className="text-xl font-bold text-slate-600 p-2">Login</a>
                            </Link>
                            <Link href="/register">
                                <a className="text-xl font-bold text-slate-600 p-2">Register</a>
                            </Link>
                        </div>
                    )
                }
            </div>
        </header>
    );
}