import prisma from "../../lib/prisma";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();
  const { email, name, password } = req.body;
  if (!email || !password) return res.status(400).send("Missing fields");
  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) return res.status(400).send("User already exists");
  const hashedPassword = await bcrypt.hash(password, 10);
  await prisma.user.create({
    data: { email, name, hashedPassword }
  });
  res.status(201).end();
}
