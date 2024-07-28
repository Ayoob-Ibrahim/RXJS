// import * as jwt from 'jsonwebtoken';


export class jwtService {
    constructor() { }

    // Encode data into JWT
    encodeData(data: any, secretKey: string): string {
        return `jwt.sign(data, secretKey)`;
    }

    // Decode JWT and retrieve data
    decodeData(token: string, secretKey: string): any {
        try {
            const decodedData = `jwt.verify(token, secretKey)`;
            return decodedData;
        } catch (error) {
            console.error('Error decoding JWT:', error);
            return null;
        }
    }

}