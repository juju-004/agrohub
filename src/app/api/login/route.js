import User from "@/db/models/user";
import bcrypt from "bcryptjs";
import connectToDB from "@/db/config/dbConnect";
import { sessionizeUser } from "@/db/utils/actions";

export async function POST(request) {
  await connectToDB();

  const { email, password } = await request.json();

  // Check if email and password are provided
  if (!email || !password) {
    return new Response("Invalid email or password", { status: 400 });
  }

  // Find the user in the database
  const currentUser = await User.findOne({ email });

  // If user is not found, return an error
  if (!currentUser) {
    return new Response("Invalid email or password", { status: 400 });
  }

  const isPasswordValid = await bcrypt.compare(password, currentUser.password);
  if (isPasswordValid) {
    await sessionizeUser(currentUser._id, currentUser.email);

    return new Response(currentUser.email, { status: 200 });
  } else {
    return new Response("Invalid email or password", { status: 400 });
  }
}
