import { prisma } from "./db";
import bcrypt from "bcryptjs";

export async function verifyPassword(email: string, password: string) {
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user || !user.password) return null;

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) return null;

  return user;
}

export async function hashPassword(password: string) {
  return await bcrypt.hash(password, 10);
}
