"use client";
import { useRouter } from "next/navigation";
export default function YouWon() {
    const router = useRouter();

    const handleClick = () => {
        router.replace("/")
    }
    return (
        <div className="flex justify-center items-center h-screen bg-blue-200">
            <div className="flex flex-col items-center gap-3 bg-white p-6 rounded-md shadow-lg">
                <div className="text-2xl font-semibold mb-4">You Lost</div>
                <button
                    className="bg-blue-300 py-4 px-8 rounded-md text-black font-semibold hover:bg-blue-400"
                    onClick={() => handleClick()}
                >
                    Go Home
                </button>
            </div>
        </div>

    )
}