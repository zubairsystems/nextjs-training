import Link from "next/link";

export default function Navbar(){
    return (
        <nav className="bg-lightblue flex items-center justify-between p-8">
            <p className="text-xl font-bold cursor-pointer hover:text-myblue"><Link href="/">Real State</Link></p>
            <div className="flex gap-4 text-xl font-bold cursor-pointer">
                <p className="cursor-pointer hover:text-myblue"><Link href="/">Home</Link></p>
                <p className="cursor-pointer hover:text-myblue"><Link href="/properties">Properties</Link></p>
            </div>
        </nav>
    );
}