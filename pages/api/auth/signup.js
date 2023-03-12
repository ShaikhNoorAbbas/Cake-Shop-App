import { connectToDatabase } from "../../../lib/db";
import { hashpassword } from "../../../lib/pass";

export async function handler(req, res) {
    if (req.method !== "POST") {
        return;
    }
    const data = req.body;
    const { name, email, password } = data;
    const client = await connectToDatabase();
    const db = client.db();
    const existingUser = await db.collection('users').findOne({ email: email })
    if (existingUser) {
        res.status(422).json({ message: "User Already Exist" });
        client.close();
        return
    }
    const hashedpassword = await hashpassword(password);
    const result = await db.collection('users').insertOne({
        name: name,
        email: email,
        password: hashedpassword
    })
    res.status(201).json({ message: " User Created successfully ! " });
    client.close();
}

export default handler;