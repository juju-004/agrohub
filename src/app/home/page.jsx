"use client";

import { Context } from "@/hooks/UserContext";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";

export default function Home() {
  const [roomID, setRoomID] = useState("");
  const router = useRouter();

  const { user } = useContext(Context);

  if (user) {
    return (
      <div className="w-full h-screen">
        <section className="bg-gray-950 text-white">Hello {user}</section>
      </div>
    );
  }

  router.push("/");
}
