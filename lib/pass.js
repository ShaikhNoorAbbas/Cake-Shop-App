import { hash, compare } from "bcryptjs";

export async function hashpassword(password) {
    const hashedpassword = await hash(password, 12);
    return hashedpassword;
}

export async function verify(password, hashpassword) {
    const isValid = await compare(password, hashpassword);
    return isValid;
}
