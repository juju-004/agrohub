"use server";

import { SessionData } from "./iron";
import { defaultSession, sessionOptions } from "./iron";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";

// ADD THE GETSESSION ACTION
export async function getSession() {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);

  // If user visits for the first time session returns an empty object.
  // Let's add the isLoggedIn property to this object and its value will be the default value which is false
  if (!session.isLoggedIn) {
    session.isLoggedIn = defaultSession.isLoggedIn;
  }

  return session;
}

export const sessionizeUser = async (id: any, email: string) => {
  const session = await getSession();

  session.isLoggedIn = true;
  session.id = id;
  session.email = email;

  await session.save();
};
