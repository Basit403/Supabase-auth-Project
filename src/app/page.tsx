import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col md:flex-row">
      <div className="relative w-full h-[60vh] md:w-1/2 md:h-screen">
        <Image
          src="/ai.png"
          alt="ai"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center px-6 md:px-12 py-10 bg-gradient-to-b from-white to-gray-100">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-gray-900 leading-tight">
          Welcome <span className="text-blue-600">AREMU.</span>
        </h1>
        <p className="text-base md:text-xl text-gray-600 mb-8 max-w-md">
          This is just a mini project about what i learned about Supabase Authentication.
        </p>
        <Link href="/auth">
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-md transition cursor-pointer">
            Login | Sign Up
          </button>
        </Link>
      </div>
    </main>
  );
}

