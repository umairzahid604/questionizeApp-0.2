// import jwt from 'jsonwebtoken';
import { jwtVerify, SignJWT } from 'jose';

export function generateToken(payload) {

    const iat = Math.floor(Date.now() / 1000);
    const exp = iat + 60 * 60 * 24 * 365; // one year

    return new SignJWT({ ...payload })
        .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
        .setExpirationTime(exp)
        .setIssuedAt(iat)
        .setNotBefore(iat)
        .sign(new TextEncoder().encode(process.env.JWT_SECRET));

}


export async function verifyToken(token) {

    try {
        let { payload } = await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET));
        return { payload }

    } catch (error) {
        return { error: "Invalid token" }
    }



}

