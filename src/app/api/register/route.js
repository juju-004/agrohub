import User from "@/db/models/user";
import bcrypt from "bcryptjs";
import connectToDB from "@/db/config/dbConnect";
import { sessionizeUser } from "@/db/utils/actions";

export async function POST(request) {
  await connectToDB();

  const { email, password, fullname } = await request.json();

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return new Response("User with this email already exists", {
      status: 400,
    });
  }

  // Hash the password before storing it in the database
  const hashedPassword = await bcrypt.hash(password, 10);

  // If user is created successfully, return a success message
  const users = await User.create({
    email,
    password: hashedPassword,
    fullname,
  });

  await sessionizeUser(users._id, users.email);

  return new Response(users.email, { status: 200 });
}
