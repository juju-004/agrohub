import Link from "next/link";
import React from "react";
import { getSession } from "@/db/utils/actions";
import ClientButton from "./ClientButton";

async function Auth() {
  let session = await getSession();

  return !session.isLoggedIn ? (
    <>
      <Link href="/register" className="px-4 no-underline buttn bcom py-1.5">
        Become an instructor
      </Link>
      <Link href="/login" className="px-4 no-underline py-1.5 buttn lg:ml-4">
        Login
      </Link>
    </>
  ) : (
    <div className="fx gap-3">
      <span>{session.email}</span>
      <ClientButton />
    </div>
  );
}

export default Auth;
