import { getSession } from "@/db/utils/actions";
import { NextResponse } from "next/server";

export const DELETE = async (req) => {
  const session = await getSession();
  session.destroy();
  return new NextResponse(`Deleted`, { status: 201 });
};
