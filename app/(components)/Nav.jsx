import Link from "next/link"

export default function Navbar() {
    return (
        <div className="bg-slate-900 text-white h-10 flex justify-center items-center p-2">
            <p>[Reflex Time] by ItsMe Prince</p>
            <div className="absolute right-2">
                <Link href="https://github.com/itsmeprinceyt/reflex-time">Github</Link>
            </div>
        </div>
    )
}