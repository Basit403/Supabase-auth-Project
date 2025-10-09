"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();

      if (data?.user) {
        setUserEmail(data.user?.email ?? null);
      } else {
        router.push("/auth");
      }
    };

    getUser();
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/auth");
  };

  return (
    <main className="min-h-screen flex flex-col md:flex-row bg-gradient-to-b from-white to-gray-100 mt-3">
      <div className="relative w-full md:w-1/2 h-[60vh] md:h-screen">
        <Image
          src="/possibility.png"
          alt="possibility"
          fill
          className="object-cover ml-2"
          priority
        />
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center md:text-left px-6 md:px-12 py-10">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
          Welcome,{" "}
          <span className="text-blue-600">
            {userEmail ? userEmail : "Loading..."}
          </span>
        </h1>
        <p className="text-gray-600 mb-8">
          You’re logged in to your Aremu dashboard.
        </p>
        <button
          onClick={handleLogout}
          className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-md transition"
        >
          Logout
        </button>
      </div>
    </main>
  );
}
