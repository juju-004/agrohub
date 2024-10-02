"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function ClientButton() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const logout = async () => {
    setLoading(true);
    try {
      await axios.delete("/api/logout");

      router.refresh();
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={logout}
      disabled={loading}
      className="px-3 py-1.5 rounded-[30rem] disabled:opacity-50 hover:opacity-80 opacity-[0.99] duration-300 fx bg-black text-white"
    >
      {loading && <span className="loader mr-2"></span>} logout
    </button>
  );
}

export default ClientButton;
