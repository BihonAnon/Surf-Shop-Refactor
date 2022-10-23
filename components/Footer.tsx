import Link from "next/link";
export default function Footer() {
    return (
        <footer className="grid grid-cols-9 bg-yellow-100 p-4 sticky top-0 z-50">
            <div className="bg-yellow-200 p-1 text-blue-700 rounded-xl col-start-2 col-end-3 text-center text-2xl">
                <Link href="/">
                    <a>Contact Us</a>
                </Link>
            </div>
            <div className="bg-yellow-200 p-3 text-blue-700 rounded-3xl col-start-4 col-end-7 text-center">
                <a className="font-extrabold text-3xl">Surf-Shop</a>
            </div>
            <div className="bg-yellow-200 p-3 text-blue-700 rounded-3xl col-start-8 col-end-9 text-center text-2xl">
                <Link href="/shop">
                    <a>Products</a>
                </Link>
            </div>
        </footer>
    );
}